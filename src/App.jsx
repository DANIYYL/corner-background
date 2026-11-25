import { Fragment, useEffect, useRef, useState } from 'react'
import { EFFECTS, BASE_PREVIEW, BASE_PAGE } from './effects.js'
import { PALETTES } from './palettes.js'
import { GITHUB_URL, RESUME_URL } from './config.js'

const fa = (n) => n.toLocaleString('fa-IR')
const ALL_CSS = BASE_PREVIEW + '\n' + EFFECTS.flatMap((e) => e.css).join('\n')

function build(e, c) {
  const vars = `:root{--bg:${c.bg};--p:${c.p};--s:${c.s};--line:color-mix(in srgb,var(--p) 22%,transparent)}`
  let out = `<style>\n${vars}\n${BASE_PAGE}\n${e.css.join('\n')}\n</style>\n\n<div class="fx fx-${e.id}">${e.html}</div>`
  if (e.js) out += `\n\n<script>\n${e.js}\n</script>`
  return out
}

async function copyText(t) {
  try {
    await navigator.clipboard.writeText(t)
    return true
  } catch {
    const a = document.createElement('textarea')
    a.value = t
    a.style.cssText = 'position:fixed;opacity:0'
    document.body.appendChild(a)
    a.select()
    let ok = false
    try { ok = document.execCommand('copy') } catch { /* ignore */ }
    a.remove()
    return ok
  }
}

export default function App() {
  const [idx, setIdx] = useState(0)
  const [c, setC] = useState({ bg: PALETTES[0].bg, p: PALETTES[0].p, s: PALETTES[0].s })
  const [toast, setToast] = useState('')
  const timer = useRef()

  useEffect(() => {
    const r = document.documentElement.style
    r.setProperty('--bg', c.bg)
    r.setProperty('--p', c.p)
    r.setProperty('--s', c.s)
  }, [c])

  const pick = (i) => { setIdx(i); setC({ bg: PALETTES[i].bg, p: PALETTES[i].p, s: PALETTES[i].s }) }
  const manual = (k, v) => { setIdx(-1); setC({ ...c, [k]: v }) }

  const copy = async (e) => {
    const ok = await copyText(build(e, c))
    setToast(ok ? `کد «${e.fa}» کپی شد` : 'کپی انجام نشد')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), 2200)
  }

  const track = (e) => {
    const b = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', e.clientX - b.left + 'px')
    e.currentTarget.style.setProperty('--y', e.clientY - b.top + 'px')
  }

  return (
    <main className="wrap">
      <style>{ALL_CSS}</style>
      <h1>Corner Background</h1>

      <div className="ctl">
        <div className="pick">
          <label>پس‌زمینه <input type="color" value={c.bg} onChange={(e) => manual('bg', e.target.value)} /></label>
          <label>اصلی <input type="color" value={c.p} onChange={(e) => manual('p', e.target.value)} /></label>
          <label>ثانویه <input type="color" value={c.s} onChange={(e) => manual('s', e.target.value)} /></label>
        </div>
        <div className="pals">
          {PALETTES.map((p, i) => (
            <button key={p.name} type="button" title={p.name} className={'pal' + (i === idx ? ' on' : '')} onClick={() => pick(i)}>
              <i style={{ background: `linear-gradient(90deg,${p.bg} 0 30%,${p.p} 30% 65%,${p.s} 65%)` }} />
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {EFFECTS.map((e, i) => (
          <Fragment key={e.id}>
            {i === 15 && <h2 className="sec">افکت‌های کوچک گوشه‌ای</h2>}
            <article
              className="card"
              role="button"
              tabIndex={0}
              onClick={() => copy(e)}
              onKeyDown={(k) => { if (k.key === 'Enter' || k.key === ' ') { k.preventDefault(); copy(e) } }}
            >
              <div className="demo" onMouseMove={e.id === 'cur' ? track : undefined}>
                <div className={`fx fx-${e.id}`} dangerouslySetInnerHTML={{ __html: e.html }} />
                <span className="badge">کپی کد</span>
              </div>
              <div className="info">
                <h3>{fa(i + 1)}. {e.fa} <small>{e.en}</small></h3>
              </div>
            </article>
          </Fragment>
        ))}
      </div>

      <footer className="foot">
        <a className="btn" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn ghost" href={RESUME_URL} target="_blank" rel="noreferrer">رزومه</a>
      </footer>

      <div className={'toast' + (toast ? ' on' : '')} role="status">{toast}</div>
    </main>
  )
}
