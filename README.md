# Project Name: 제주(JEJU)

<br />

<p align="center">
	<img height="160" alt="Jeju-Primary" src="https://user-images.githubusercontent.com/47492535/224227953-0997d5f1-efb0-4322-9bac-cc8746012606.png" align="center">
</p>
<br />

**`PROJECT CODE`**
**제주 (JEJU)**

**`DESCRIPTION`**
SPI 서비스 프로젝트입니다.

**`CONFLUENCE`**

- https://seoulpi.atlassian.net/wiki/spaces/DEV/pages/2296225

**`URL`**

- **운용서버**: https://seoulpi.io
- **개발서버**: https://dev.seoulpi.io

---

## 기술 스택

- React.js
- Next.js
- Typescript
- Styled-Components
- Recoil
- Axios

<br />

### Vendors

- Highcharts
- TinyMCE
- @seoulpi/nakdong

<br />

---

<br />

### 개발 서버

```shell
git clone https://github.com/seoulpi/jeju.git

yarn install

touch .env
// .env.example 파일을 참고하여, 값을 채워주세요.

touch ./@types/environment.d.ts
// https://seoulpi.atlassian.net/wiki/spaces/DEV/pages/7143454/jeju.init. 링크를 참고하여, 값을 채워주세요.

yarn dev -p 3000
// 포트 기본값: 3000
```

<br />

### 테스트 서버 (Local)

1. **개발 서버** 과정과 동일하게 진행해줍니다.

2. `.npmrc` 파일을 수정해줍니다.

   - 프로덕트에 프라이빗 패키지(**@seoulpi/nakdong**)가 존재합니다. 인증을 위한 과정입니다.

   - **배포 시에는 반드시 두 번째 Line을 지워주세요.**

```shell
@seoulpi:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<깃허브_개인_토큰>
```

3. 이미지 생성 및 컨테이너 실행

```shell
yarn docker-build

docker run -d -it -e PORT=3000 --name jeju -p 80:3000 jeju
```

<br />

### 테스트 서버 (GCP) - Auto

> **http://dev.seoulpi.io 을 통해서 접속할 수 있습니다!**

1. 현재 `Cloud Build` 를 통해서 `develop` 브랜치에 트리거가 걸려있는 상태입니다.
   트리거가 발동되면, `cloudbuild.yaml` 파일을 통해서 자동 배포가 진행됩니다.
2. 배포 부산물로 발생한 Docker Image는 `Artifact Registry` 에 저장됩니다.
3. 해당 이미지를 가지고 `Cloud Run` 을 통해서 웹 서버를 실행시킵니다

<br />

### 운용 서버 실행 (GCP) - Auto

> **https://seoulpi.io 을 통해서 접속할 수 없습니다!**

현재 운용 서버는 필요하지 않습니다. 추후에 추가 작업이 필요합니다.

<br />

---
