import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;

export const MiniHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: absolute;
  top: 60px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderOption = styled.div`
  display: flex;
  cursor: pointer;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GowunDodum["font-family"]};
  font-size: 30px;
  font-style: normal;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "400")};
  border-bottom: ${({ isSelected, theme }) =>
    isSelected ? `2px solid ${theme.colors.primary}` : "none"};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.6)};
`;

export const LettersContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 70vh;
  overflow-y: scroll;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const LetterWrapper = styled.div`
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  line-height: 1.6;
  font-family: "GowunDodum", sans-serif;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ isExpanded }) => (isExpanded ? "1000px" : "4.8em")};
`;

export const LockedMessage = styled.div`
  color: gray;
  font-size: 14px;
`;

export const LetterContent = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ isExpanded }) => (isExpanded ? "normal" : "nowrap")};
  display: -webkit-box;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "none" : 3)};
  -webkit-box-orient: vertical;
`;

export const LetterInfo = styled.div`
  font-size: 12px;
  color: darkgray;
  display: flex;
  justify-content: space-between;
`;

export const EmptyMessage = styled.div`
  color: gray;
  font-size: 16px;
  margin-top: 20px;
`;
