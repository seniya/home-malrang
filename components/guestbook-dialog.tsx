"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";

export function GuestbookDialog() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <Dialog.Root onOpenChange={(open) => !open && setIsSubmitted(false)}>
      <Dialog.Trigger asChild>
        <button className="pixel-button pixel-button-pink" type="button">
          방명록에 흔적 남기기 <span aria-hidden="true">➜</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content" aria-describedby="guestbook-description">
          <Dialog.Title className="dialog-title">방명록에 흔적 남기기</Dialog.Title>
          <Dialog.Description id="guestbook-description" className="dialog-description">
            지금은 데모 버전이에요. 당신의 메시지는 이 브라우저 안에서만 잠깐 전시됩니다.
          </Dialog.Description>
          {isSubmitted ? (
            <div className="success-note" role="status">
              ☆ 메시지가 전파되었습니다! 놀러와줘서 고마워요 ☆
            </div>
          ) : (
            <form className="guestbook-form" onSubmit={handleSubmit}>
              <label htmlFor="guest-name">닉네임</label>
              <input id="guest-name" name="name" required placeholder="cool_web_surfer" />
              <label htmlFor="guest-message">메시지</label>
              <textarea id="guest-message" name="message" required rows={4} placeholder="안녕! 홈페이지 구경 잘 하고 가요 :)" />
              <div className="dialog-actions">
                <Dialog.Close asChild>
                  <button className="pixel-button pixel-button-dark" type="button">취소</button>
                </Dialog.Close>
                <button className="pixel-button pixel-button-lime" type="submit">등록하기</button>
              </div>
            </form>
          )}
          <Dialog.Close asChild>
            <button className="dialog-close" type="button" aria-label="방명록 닫기">×</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
