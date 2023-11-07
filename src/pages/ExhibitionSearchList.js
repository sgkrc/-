import React, { useEffect, useState } from "react";
import { search } from "../lib/api/exhibition"; // Axios 라이브러리 추가
function ExhibitionSearchList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("searchTerm");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
      fetchSearchResults(storedSearchTerm);
    }
  }, []);

  const fetchSearchResults = async (query) => {
    try {
      if (query) {
        setLoading(true); // 로딩 시작
        setSearchResults([]); // 초기화
        // Axios를 사용하여 서버로 GET 요청을 보냄
        const response = await search(query);

        if (response.status === 200) {
          // 성공적으로 데이터를 받았을 때
          setSearchResults(response.data.results); // 데이터로 업데이트
          console.log("검색 결과(ebs2):", response.data.results);
        } else {
          console.error("검색 결과를 불러오는데 실패했습니다.");
        }
      }
    } catch (error) {
      console.error("오류 발생:", error);
    } finally {
      setLoading(false); // 로딩 완료
    }
  };

  return (
    <div>
      <h1>검색 결과</h1>
      {loading ? (
        <p>로딩 중...</p>
      ) : searchResults.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <ul className="exhibition-list">
          {searchResults.map((result) => (
            <li key={result.ART_NAME}>
              <img
                src={result.ART_PICTURE}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
              <div
                className="exhibition-details"
                style={{ marginLeft: "250px", marginTop: "-100px" }}
              >
                <span
                  style={{
                    borderBottom: "1px solid black",
                    display: "block",
                    width: "700px",
                  }}
                >
                  전시명: {result.ART_NAME}
                </span>
                <span
                  style={{
                    borderBottom: "1px solid black",
                    display: "block",
                    width: "700px",
                  }}
                >
                  전시 기간: {result.ART_START} - {result.ART_END}
                </span>
                <span
                  style={{
                    borderBottom: "1px solid black",
                    display: "block",
                    width: "700px",
                  }}
                >
                  전시 장소: {result.ART_PLACE}
                </span>
                <span
                  style={{
                    borderBottom: "1px solid black",
                    display: "block",
                    width: "700px",
                  }}
                >
                  전시 가격: {result.ART_PRICE}
                </span>
                <span>전시 작가: {result.ART_ARTIST}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExhibitionSearchList;
