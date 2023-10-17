import styled, { css } from "styled-components";

export const AccountList = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 100%;
`;

export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const AccountHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography["3xl"].fontSize};
  line-height: ${(props) => props.theme.typography["3xl"].lineHeight};
  font-weight: normal;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.m};
`;

export const InfoText = styled.div`
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
`;

export const InfoTextBold = styled.span`
  font-weight: ${(props) => props.theme.typography.weight.bold};
`;

export const AccountSection = styled.div`
  padding: ${(props) => props.theme.space.m} 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`;

export const AccountListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`;

export const InfoBubble = styled.div`
  background-color: ${(props) => props.theme.colors.green.light};
  color: ${(props) => props.theme.colors.green.dark};
  border-radius: ${(props) => props.theme.space.xl};
  font-size: ${(props) => props.theme.typography.m.fontSize};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  padding:  ${(props) => props.theme.space.xs} ${(props) => props.theme.space.l} ${(props) => props.theme.space.xs} ${(props) => props.theme.space.l};
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`;
