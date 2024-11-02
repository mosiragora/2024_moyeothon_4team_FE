import React, { useState } from "react";
import * as S from "./styled";

const LetterComponent = ({ letter, isReceived }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLocked = !letter.isAvailable;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.LetterWrapper onClick={toggleExpand} isExpanded={isExpanded}>
      {isLocked ? (
        <S.LockedMessage>
          편지를 열 수 없습니다. 도착 예정입니다.
        </S.LockedMessage>
      ) : (
        <S.LetterContent isExpanded={isExpanded}>
          {letter.content}
        </S.LetterContent>
      )}
      <S.LetterInfo>
        {isReceived
          ? `보낸 사람: ${letter.sender}`
          : `받는 사람: ${letter.receiver}`}
        <span>{letter.date}</span>
      </S.LetterInfo>
    </S.LetterWrapper>
  );
};

export default LetterComponent;
