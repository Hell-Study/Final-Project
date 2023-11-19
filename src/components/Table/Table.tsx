import * as styled from './Table.styles';
import { TableNav } from './TableNav';
import { TableHeader } from './TableHeader';
import { TableBox } from './TableBox';

export const Table = () => {
  return (
    <styled.TableContainer>
      <TableNav />
      <styled.TableBoxWrap>
        <TableHeader />
        <TableBox />
      </styled.TableBoxWrap>
    </styled.TableContainer>
  );
};
