
import { useDaumPostcodePopup } from 'react-daum-postcode';

const PostCode = ({getAdressData, getPostCodeData }) => {
  const open = useDaumPostcodePopup();

	const handleComplete = (data) => {
		console.log(data)
    let fullAddress = data.address;
    const zonecode = data.zonecode
;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    getAdressData(fullAddress)
    getPostCodeData(zonecode)
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button type='button' onClick={handleClick} style={{marginLeft: '10px', border: '1px solid transparent', width:'120px', height: '30px'}}>
      주소 찾기
    </button>
  );
};

export default PostCode