import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

// 로그인, 회원가입, 추가정보입력, 비밀번호 찾기 라우터
const MemberRouter = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Navigate
            replace
            to={"라우터의 메인 페이지가 없으면 리디렉션할 페이지 경로"}
          />
        }
      />
      <Route
        path=""
        element={
          <Suspense fallback={<LoadingPage />}>
            {"라우터의 메인 페이지가 있으면 페이지 컴포넌트"}
          </Suspense>
        }
      />
      <Route
        path="페이지경로"
        element={
          <Suspense fallback={<LoadingPage />}>{"페이지 컴포넌트"}</Suspense>
        }
      />
    </Routes>
  );
};

export default MemberRouter;