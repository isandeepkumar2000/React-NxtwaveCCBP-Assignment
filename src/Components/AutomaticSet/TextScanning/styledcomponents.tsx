import styled from "styled-components";

export const TextBoxItems = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 144px;
  margin-left: 32px;
`;

export const TimeVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

export const TimeTextBox = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #e2e8f0;
`;

export const VideoPlayerText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 8px;
  gap: 4px;

  background: #475569;
  border-radius: 8px;
  color: white;
`;

export const VideoSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const IntroNetwork = styled.span`
  top: 36px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;
export const ButtonCancel = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  width: 120px;
  height: 48px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #f8fafc;

  background: #334155;
  border-radius: 12px;
  border: none;
`;
export const ButtonNext = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  width: 120px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: white;
  border: none;
  margin-left: 16px;
  background: #3b82f6;
  border-radius: 12px;
`;
export const ButtonSection = styled.div`
  display: flex;
  margin-top: 24px;
`;
