import React, { useState } from "react";
import * as S from "./styled";
import LetterComponent from "./LetterComponent";

export const LetterInventoryPage = () => {
  const [isReceived, setIsReceived] = useState(true);

  const receivedLetters = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    content: `이것은 받은 편지 ${
      index + 1
    }의 내용입니다. 긴 내용을 테스트하기 위해 800자 길이로 설정된 편지입니다. 이 편지에는 다양한 내용이 담겨있으며, 읽는 이로 하여금 감동을 줄 수 있는 이야기를 담고 있습니다. 예시로 작성된 편지이기 때문에 중복된 내용이 포함되어 있을 수 있으며, 실제 구현 시에는 더 다양한 내용이 포함될 수 있습니다.`,
    sender: `홍길동${index + 1}`,
    receiver: "철수",
    isAvailable: true,
    date: `2024-11-${String(index + 1).padStart(2, "0")}`,
  }));

  const sentLetters = Array.from({ length: 10 }, (_, index) => ({
    id: index + 11,
    content: `이것은 보낸 편지 ${
      index + 1
    }의 내용입니다. 긴 내용을 테스트하기 위해 800자 길이로 설정된 편지입니다. 이 편지에는 다양한 내용이 담겨있으며, 받는 사람에게 감동을 줄 수 있는 이야기를 담고 있습니다. 예시로 작성된 편지이기 때문에 중복된 내용이 포함되어 있을 수 있으며, 실제 구현 시에는 더 다양한 내용이 포함될 수 있습니다.`,
    sender: "철수",
    receiver: `홍길동${index + 1}`,
    isAvailable: true,
    date: `2024-10-${String(index + 1).padStart(2, "0")}`,
  }));

  const lettersToShow = isReceived ? receivedLetters : sentLetters;

  return (
    <S.Wrapper>
      <S.MiniHeader>
        <S.HeaderOption
          isSelected={isReceived}
          onClick={() => setIsReceived(true)}
        >
          받은 편지
        </S.HeaderOption>
        <S.HeaderOption
          isSelected={!isReceived}
          onClick={() => setIsReceived(false)}
        >
          보낸 편지
        </S.HeaderOption>
      </S.MiniHeader>

      <S.LettersContainer>
        {lettersToShow.length > 0 ? (
          lettersToShow.map((letter) => (
            <LetterComponent
              key={letter.id}
              letter={letter}
              isReceived={isReceived}
            />
          ))
        ) : (
          <S.EmptyMessage>편지가 없습니다.</S.EmptyMessage>
        )}
      </S.LettersContainer>
    </S.Wrapper>
  );
};

export default LetterInventoryPage;
