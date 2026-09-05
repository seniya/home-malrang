# MALRANG.NET

2000년대 초 개인 홈페이지 감성으로 만든 빈티지 웹존입니다.

## 실행

```bash
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 검증

```bash
pnpm lint
pnpm build
```

## 주요 구성

- Next.js App Router + React
- Tailwind CSS v4
- Radix UI Dialog
- 반응형 3열 데스크톱 / 단일 열 모바일 레이아웃
- 도트 배경, 네온 색상, bevel 패널, marquee, 웹링, 방문자 카운터
- 키보드로 사용할 수 있는 방명록 데모
- `prefers-reduced-motion` 대응

## 디렉터리

- `app/page.tsx`: 홈페이지 화면
- `app/globals.css`: 디자인 토큰과 전역 스타일
- `components/retro-panel.tsx`: 빈티지 패널 컴포넌트
- `components/guestbook-dialog.tsx`: Radix 기반 방명록 Dialog
- `doc/retro-homepage-plan.md`: 구현 계획
