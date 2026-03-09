```bash
# 원격 저장소 코드 설명

git init : 저장소가 없으면
	생성 있으면 초기화

git add 파일명 or git add . :
  파일을 임시 저장소에 등록

git commit -m "커밋 메세지 내용" :
  파일을 스냅샷 형태로 버전관리

git branch -m main :
  main이라는 이름의 브랜치 생성 및 변경
git remote add 별명 주소 :
  : 별명 형태로 원격 저장소 주소를 기억
git push -u 별명 브랜치명
  : 브랜치명의 버전을 별명의 원격 저장소로
  보냄
```

# frontend 명령어

```bash
#frontend라는 이름으로 프론트엔드 프로젝트 생성 위해 터미널에 아래 명령어 입력
npx create-react-app frontend

```
