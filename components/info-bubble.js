import styled from "styled-components";

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
    padding: ${(props) => props.theme.space.xs};
  }
`;