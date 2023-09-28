import { useState } from 'react';
import PostCode from '../components/PostCode/PostCode';
import DefaultProfile from '../assets/images/default_profile_img.gif';

const SignUpPage = () => {
  const [adress, setAdress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [file, setFile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChange = (event) => {
    const { files } = event.target;
    const reader = new FileReader();
    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }
    reader.onloadend = () => {
      const readerImage = reader.result;
      setFile(readerImage);
    };
  };

  const getAdressData = (adressData) => {
    setAdress(adressData);
  };
  
  const getPostCodeData = (postCodeData) => {
    setPostCode(postCodeData);
  };

  return (
    <div>
      <form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '350px auto',
            alignItems: 'center',
            justifyContent: 'center',
            width: '450px',
          }}
        >
          <label style={{ width: '78%' }}>
            프로필
            <div>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={file !== '' ? file : DefaultProfile}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <input type="file" onChange={handleChange} />
            </div>
          </label>
          <label style={{ width: '78%' }}>
            이메일
            <div style={{ marginTop: '10px', width: '100%' }}>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                placeholder="이메일"
                style={{ width: '100%', height: '30px' }}
              />
            </div>
          </label>
          <label style={{ width: '78%' }}>
            비밀번호
            <div style={{ marginTop: '10px', width: '100%' }}>
              <input
                type="password"
                placeholder="비밀번호"
                style={{ width: '100%', height: '30px' }}
              />
            </div>
          </label>
          <label style={{ width: '78%' }}>
            비밀번호 재확인
            <div style={{ marginTop: '10px', width: '100%' }}>
              <input
                type="password"
                placeholder="비밀번호 재확인"
                style={{ width: '100%', height: '30px' }}
              />
            </div>
          </label>
          <label
            style={{ marginTop: '10px', marginBottom: '10px', width: '78%' }}
          >
            <div>
              주소
              <div>
                <input
                  type="text"
                  name="postCode"
                  value={postCode}
                  placeholder="우편번호"
                  style={{ width: '50%', height: '30px' }}
                />
                <PostCode
                  getAdressData={getAdressData}
                  getPostCodeData={getPostCodeData}
                />
              </div>
              <div style={{ width: '100%', margin: '10px 0' }}>
                <input
                  type="text"
                  value={adress}
                  placeholder="주소"
                  style={{ width: '100%', height: '30px' }}
                />
              </div>
              <div style={{ width: '100%' }}>
                <input
                  type="text"
                  placeholder="상세주소"
                  style={{ width: '100%', height: '30px' }}
                />
              </div>
            </div>
          </label>
          <label style={{ width: '78%' }} id="gender">
            성별
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '200px',
              }}
            >
              <div>
                남자
                <input type="radio" name="gender" />
              </div>
              <div>
                여자
                <input
                  type="radio"
                  style={{ marginTop: '10px' }}
                  name="gender"
                />
              </div>
            </div>
          </label>
          <div>
            <button>회원 가입</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
