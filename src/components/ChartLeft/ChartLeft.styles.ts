import styled from 'styled-components';

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.bg_element4};
  padding: 1rem 1.1rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.alpha1} 0px 2px 10px 0px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ChartInfoWrapper = styled.div`
  display: flex;
`;

export const SymbolWrapper = styled.span`
  display: inline-flex;
  user-select: auto;
  position: relative;
`;
export const SymbolGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SymbolOutline = styled.span`
  border-radius: 50%;
  overflow: hidden;
`;

export const SymbolOutline1 = styled(SymbolOutline)``;
export const SymbolOutline2 = styled(SymbolOutline)`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(9px, -9px);
`;

export const Symbol = styled.img`
  position: relative;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  z-index: 1;
  background: #ccc;
`;

export const ChartName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.heading1};
`;

export const ChartTicker = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.heading2};
`;

export const WidgetContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Chart = styled.div`
  width: 100%;
`;
