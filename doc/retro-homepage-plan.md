# 2000년대 초 빈티지 홈페이지 구현 계획

> 상태: 구현 진행 중

## 목표

최신 React와 Tailwind CSS, Radix UI를 기반으로 2000년대 초 개인 홈페이지의 시각 언어를 재현한다. 반응형 레이아웃과 접근성을 함께 적용해 데스크톱 감성과 현대적인 사용성을 모두 제공한다.

## 기술 스택

2026-09-05 npm 레지스트리 조회 기준:

- Next.js `16.3.4`
- React / React DOM `19.2.8`
- Tailwind CSS `4.3.3`
- `radix-ui` `1.6.7`
- `@radix-ui/react-dialog` `1.1.23`
- TypeScript, pnpm

구현 시점에는 최신 버전을 다시 확인하고 lockfile로 고정한다.

## 디자인 방향

- 어두운 남색 도트 배경, 전기 파랑·마젠타·라임 포인트
- 1px 점선, bevel shadow, 픽셀풍 버튼, marquee, 웹링, 방문자 카운터
- 개인 홈페이지·방명록·업데이트 로그·상태 메시지 중심의 정보 구조
- 데스크톱 3열 레이아웃, 모바일 단일 열 레이아웃
- 자동 음악은 사용하지 않고, `prefers-reduced-motion`을 존중

## 정보 구조

1. 상단 공지 ticker와 사이트 브랜드
2. HOME / ABOUT ME / UPDATES / LINKS / GUESTBOOK 내비게이션
3. 왼쪽: 프로필과 웹링
4. 가운데: 환영 메시지, 최신 업데이트, 인용문
5. 오른쪽: 방문자 카운터, 오늘의 메모, 배너
6. 하단: 방명록 CTA와 푸터

## 컴포넌트

- `app/page.tsx`: 정적 페이지 조합
- `app/globals.css`: Tailwind v4 토큰과 빈티지 스타일
- `components/retro-panel.tsx`: 공통 패널 프레임
- `components/guestbook-dialog.tsx`: Radix Dialog 기반 방명록 데모
- `app/layout.tsx`: 메타데이터와 전역 레이아웃

대부분은 서버 컴포넌트로 유지하고, 방명록처럼 상호작용이 필요한 부분만 클라이언트 컴포넌트로 분리한다.

## 구현 순서

1. Next.js App Router, TypeScript, Tailwind, Radix 의존성 구성
2. 디자인 토큰과 전역 배경·패널 스타일 구성
3. 반응형 3열 레이아웃 작성
4. 프로필·업데이트·웹링·카운터·배너 정적 콘텐츠 작성
5. Radix Dialog 방명록 추가
6. 메타데이터, 키보드 접근성, reduced-motion, lint/build 검증

## 완료 기준

- 375px 화면에서 가로 스크롤이 없음
- 2000년대 초 감성을 보여주는 시각 요소가 충분히 포함됨
- 방명록 Dialog를 마우스와 키보드로 열고 닫을 수 있음
- 외부 이미지/API 없이 첫 화면이 렌더링됨
- `pnpm lint`와 `pnpm build`가 통과함

## 검증 명령

```bash
pnpm lint
pnpm build
```
