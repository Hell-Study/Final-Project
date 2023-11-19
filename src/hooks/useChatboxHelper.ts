import shortId from 'shortid';
import getNickname from 'api/getNickname';
import Swal from 'sweetalert2';

export const updateNickname = async () => {
  const { value: userChosenNickname } = await Swal.fire({
    title: '닉네임 변경',
    input: 'text',
    inputLabel: '변경할 닉네임을 입력해주세요',
    inputPlaceholder: '닉네임 입력',
    showCancelButton: true,
    confirmButtonText: '저장',
    cancelButtonText: '취소',
  });

  if (userChosenNickname) {
    try {
      localStorage.setItem('displayName', userChosenNickname);
      Swal.fire('성공', '닉네임이 업데이트되었습니다.', 'success');
    } catch (error) {
      console.error('닉네임 업데이트 중 오류 발생:', error);
      Swal.fire('오류', '닉네임 업데이트 중 오류가 발생했습니다.', 'error');
    }
  }
};

function generateRandomUID() {
  const randomString = shortId.generate();
  const uppercaseString = randomString.replace(/[a-z]/g, (char) =>
    char.toUpperCase(),
  );
  return uppercaseString;
}

export function saveUserInfoToLocalStorage() {
  const uid = generateRandomUID();
  const displayName = getNickname();

  localStorage.setItem('uid', uid);
  localStorage.setItem('displayName', displayName);
}
