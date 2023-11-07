const express = require("express");
const router = express.Router();
const db = require("../db");

//전시
// API로부터 모든 전시회 정보를 가져와 클라이언트에게 제공
router.get("/allexhibitions", (req, res) => {
  const sql = "SELECT * FROM exhibition"; // exhibition 테이블에서 모든 정보를 가져오는 SQL 쿼리
  db.query(sql, (err, results) => {
    if (err) {
      console.log("에러 발생");
      console.log(err);
      return res.status(500).json({
        error: "데이터베이스에서 전시회 정보를 가져오는 중 에러가 발생했습니다",
      });
    }

    // 결과를 클라이언트에게 응답
    res.status(200).json(results);
    //console.log(results)
  });
});

// 개별 전시회 정보
router.get("/exhibitiondetail/:id", (req, res) => {
  const art_num = req.params.id; // Retrieve the 'id' parameter from the URL

  const sql = "SELECT * FROM exhibition where ART_NUM = ?";

  db.query(sql, [art_num], (err, results) => {
    if (err) {
      console.log("에러 발생");
      console.log(err);
      return res.status(500).json({
        error: "데이터베이스에서 전시회 정보를 가져오는 중 에러가 발생했습니다",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        error: "해당 ID로 전시회 정보를 찾을 수 없습니다",
      });
    }

    // Respond with the first result (assuming only one result is expected)
    res.status(200).json(results[0]);
  });
});

// 전시회 조회 엔드포인트
router.get("/ExhibitionSearchList", (req, res) => {
  const searchTerm = req.query.query;
  console.log("검색어(server):", searchTerm); // 검색어 출력
  const sql = `SELECT ART_PICTURE, ART_NAME, ART_ARTIST, ART_PRICE, ART_PLACE, ART_START, ART_END FROM exhibition WHERE ART_NAME LIKE '%${searchTerm}%'`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    console.log(results);
    res.json({ results });
  });
});

// 전시회 랜덤으로 불러오기 --> 나중에 꼭 추천 으로 변경
router.get("/RandomExhibitions", (req, res) => {
  const sql = "SELECT * FROM exhibition ORDER BY RAND() LIMIT 3"; // exhibition 테이블에서 랜덤으로 3개의 정보를 가져오는 SQL 쿼리
  db.query(sql, (err, results) => {
    if (err) {
      console.log("에러 발생");
      console.log(err);
      return res.status(500).json({
        error: "데이터베이스에서 전시회 정보를 가져오는 중 에러가 발생했습니다",
      });
    }

    // 결과를 클라이언트에게 응답
    res.status(200).json(results);
  });
});

module.exports = router;
