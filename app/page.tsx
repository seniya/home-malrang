import { GuestbookDialog } from "@/components/guestbook-dialog";
import { RetroPanel } from "@/components/retro-panel";

const updates = [
  { date: "06.14.26", text: "새로운 배경화면을 추가했어요!" },
  { date: "06.01.26", text: "웹존 오픈. 아직 공사 중..." },
  { date: "05.28.26", text: "도메인을 샀다! 드디어 나도 홈피 주인." },
];

const webRings = ["★ indie web club", "★ 밤샘 코딩 연합", "★ pixel friends", "★ 404 not found"].map((name, index) => ({ name, index }));

export default function Home() {
  return (
    <main className="site-shell">
      <div className="top-ticker" aria-label="공지">
        <span aria-hidden="true">&gt;&gt;&gt; </span> WELCOME TO MALRANG&apos;S WEB ZONE <span aria-hidden="true"> &lt;&lt;&lt;</span>
      </div>

      <header className="site-header">
        <div className="brand-lockup">
          <div className="sparkle-mark" aria-hidden="true">✦</div>
          <div>
            <p className="eyebrow">EST. 2001 / PERSONAL HOMEPAGE</p>
            <h1>MALRANG<span>.NET</span></h1>
          </div>
        </div>
        <div className="status-light"><span aria-hidden="true">●</span> ONLINE!</div>
      </header>

      <nav className="site-nav" aria-label="주요 메뉴">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT ME</a>
        <a href="#updates">UPDATES</a>
        <a href="#links">LINKS</a>
        <a href="#guestbook">GUESTBOOK</a>
      </nav>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-text">WELCOME FRIENDS · PLEASE SIGN MY GUESTBOOK · HAVE A NICE DAY! · WELCOME FRIENDS · PLEASE SIGN MY GUESTBOOK · HAVE A NICE DAY! · </div>
      </div>

      <div className="home-grid" id="home">
        <aside className="sidebar-left">
          <RetroPanel title="PROFILE" tone="pink">
            <div className="avatar-frame"><div className="avatar-face" aria-hidden="true">:3</div><span>NO IMAGE<br />AVAILABLE</span></div>
            <h3 className="profile-name">malrang / 말랭</h3>
            <p className="profile-copy">인터넷 어딘가를<br />떠돌고 있는 사람</p>
            <div className="mini-status"><span className="status-dot" /> making the web cute</div>
            <div className="divider" />
            <p className="micro-copy">현재 듣는 중:<br /><strong>♪ 2000년대 플레이리스트</strong></p>
          </RetroPanel>

          <RetroPanel title="WEBRING" tone="lime" className="webring-panel">
            <p className="micro-copy">이 홈페이지는 다음과<br />연결되어 있습니다.</p>
            <ul className="webring-list">
              {webRings.map(({ name, index }) => <li key={name}><a href={`#ring-${index}`}>{name}</a></li>)}
            </ul>
            <div className="webring-buttons"><button type="button" aria-label="이전 웹링">&lt;&lt;</button><button type="button" aria-label="다음 웹링">&gt;&gt;</button></div>
          </RetroPanel>
        </aside>

        <section className="main-column" id="about">
          <RetroPanel title="WELCOME!" tone="blue">
            <div className="welcome-copy">
              <p className="welcome-kicker">HELLO, INTERNET!</p>
              <h2>어서와요, 여기는<br /><em>말랭의 웹존</em>입니다.</h2>
              <p>천천히 둘러보고 가세요. 별것 없는 공간이지만,<br className="desktop-break" /> 가끔은 새로운 것이 업데이트됩니다. 아마도요!</p>
              <div className="handwritten">★ 오늘도 반짝이는 하루 되세요 ★</div>
            </div>
          </RetroPanel>

          <RetroPanel title="LATEST UPDATE" tone="pink" className="updates-panel" >
            <div id="updates" className="update-list">
              {updates.map((update) => <div className="update-row" key={update.date}><time>{update.date}</time><span>{update.text}</span></div>)}
            </div>
            <a className="text-link" href="#updates">→ 모든 업데이트 보기</a>
          </RetroPanel>

          <div className="quote-card"><span aria-hidden="true">“</span><p>홈페이지는 작은 우주다.<br />누군가의 취향과 시간이 궤도를 그리는 곳.</p><span aria-hidden="true">”</span></div>
        </section>

        <aside className="sidebar-right">
          <RetroPanel title="COUNTER" tone="lime">
            <p className="counter-label">당신은 이곳의</p>
            <div className="counter-display" aria-label="방문자 수 001337">001337</div>
            <p className="counter-label">번째 방문자입니다!</p>
            <p className="last-visit">마지막 업데이트<br /><strong>2026. 06. 14</strong></p>
          </RetroPanel>
          <RetroPanel title="TODAY&apos;S NOTE" tone="blue">
            <div className="note-paper"><p>오늘의 할 일</p><ul><li>☑ 물 마시기</li><li>☐ 산책하기</li><li>☐ 새로운 것 만들기</li></ul></div>
          </RetroPanel>
          <div className="ad-sticker" role="img" aria-label="멋진 웹사이트를 만들어 보세요">MAKE<br /><strong>COOL</strong><br />WEBSITES!</div>
        </aside>
      </div>

      <section className="guestbook-cta" id="guestbook">
        <div><p className="eyebrow">YOUR VOICE MATTERS</p><h2>다녀간 흔적을 남겨주세요!</h2></div>
        <GuestbookDialog />
      </section>

      <footer className="site-footer" id="links">
        <div>© 2001–2026 MALRANG.NET · MADE WITH HTML &amp; ✨</div>
        <div>BEST VIEWED IN <strong>YOUR FAVORITE BROWSER</strong> · <a href="#home">TOP ↑</a></div>
      </footer>
    </main>
  );
}
