import { useState } from "react";
import styled from "styled-components";

const questions = [
  "Câu 1: Trình bày và phân tích khái niệm và các loại tranh chấp thương mại quốc tế. Lấy ví dụ minh họa cho từng loại tranh chấp.",
  "Câu 2: Trình bày và phân tích nguyên tắc xác định thẩm quyền của tòa án trong giải quyết tranh chấp Hợp đồng thương mại quốc tế theo pháp luật Việt Nam.",
  "Câu 3: Trình bày và phân tích các phương thức giải quyết tranh chấp thương mại quốc tế. Lấy ví dụ minh họa cho từng phương thức.",
  "Câu 4: Trình bày và phân tích những thách thức đối với doanh nghiệp Việt Nam khi tham gia vào tranh chấp thương mại quốc tế.",
  "Câu 5: Trình bày và phân tích khái quát về tranh chấp đầu tư giữa nhà đầu tư nước ngoài và chính phủ nước tiếp nhận đầu tư (ISDS) và các Trọng tài ISDS điển hình.",
  "Câu 6: Trình bày và phân tích thẩm quyền của cơ quan giải quyết tranh chấp của WTO (DSB).",
  "Câu 7: Trình bày và phân tích nội dung quyền miễn trừ của quốc gia trong giải quyết tranh chấp thương mại quốc tế.",
  "Câu 8: A (thương nhân Việt Nam) chuẩn bị giao kết hợp đồng mua bán hàng hóa với B (thương nhân Hàn Quốc). A muốn lựa chọn một phương thức giải quyết tranh chấp phù hợp để đàm phán và đưa vào điều khoản giải quyết tranh chấp trong hợp đồng. Biết rằng công ty của A là một doanh nghiệp nhỏ, chưa có nhiều giao dịch được thực hiện với đối tác nước ngoài; hợp đồng giữa A và B cũng là hợp đồng có giá trị tương đối lớn. Hãy tư vấn cho A trong trường hợp này.",
  "Câu 9: Trình bày và phân tích phương thức trung gian/hòa giải trong giải quyết tranh chấp Hợp đồng thương mại quốc tế.",
  "Câu 10: Trình bày và phân tích về phương thức tham vấn để giải quyết tranh chấp thương mại quốc tế trước WTO.",
  "Câu 11: Trình bày và phân tích vắn tắt nội dung tranh chấp DS404; phân tích các lợi ích kinh tế và lợi ích ngoại giao của Việt Nam sau khi có phán quyết của DSB.",
  "Câu 12: Trình bày và phân tích nội dung phương thức trung gian, hòa giải trong giải quyết tranh chấp thương mại quốc tế trước WTO.",
  "Câu 13: Trình bày và phân tích nội dung các chế tài đối với vi phạm hợp đồng thương mại quốc tế.",
  "Câu 14: Trình bày và phân tích các nội dung cơ bản (thẩm quyền, thủ tục, thực thi phán quyết) của 2 phương thức trọng tài được áp dụng để giải quyết tranh chấp trong WTO.",
  "Câu 15: Trình bày và phân tích nội dung biện pháp tạm hoãn thi hành nhượng bộ trong WTO.",
  "Câu 16: Trình bày và phân tích các nguồn luật được sử dụng trong giải quyết tranh chấp đầu tư quốc tế.",
  "Câu 17: So sánh việc công nhận và cho thi hành phán quyết của trọng tài nước ngoài với việc công nhận và cho thi hành bản án của tòa án nước ngoài.",
  "Câu 18: Trình bày và phân tích khái quát về ICJ và thủ tục giải quyết tranh chấp giữa các quốc gia thông qua Tòa án này.",
  "Câu 19: A (thương nhân Hoa Kỳ - bên mua) có tranh chấp với B (thương nhân Việt Nam – bên bán) khi B giao sai hàng cho A. A muốn khởi kiện B ra Tòa án để buộc B giao hàng thay thế và bồi thường thiệt hại cho A. Hãy tư vấn cho A về việc giải quyết tranh chấp bằng phương thức Tòa án đối với tranh chấp giữa A và B.",
  "Câu 20: Trình bày và phân tích các hình thức trọng tài và cách xác định thẩm quyền của Trọng tài thương mại quốc tế.",
  "Câu 21: Trình bày và phân tích ưu và nhược điểm của việc sử dụng tòa án quốc gia để giải quyết tranh chấp hợp đồng thương mại quốc tế.",
  "Câu 22: Trình bày và phân tích những nội dung cơ bản cần tư vấn cho doanh nghiệp xuất khẩu Việt Nam về vấn đề giải quyết tranh chấp trong một Hợp đồng xuất khẩu hàng hóa.",
  "Câu 23: Trình bày và phân tích khái niệm và luật áp dụng trong trọng tài thương mại quốc tế.",
  "Câu 24: Trình bày và phân tích những nội dung cơ bản của việc công nhận và cho thi hành bản án của tòa án nước ngoài.",
  "Câu 25: Trình bày và phân tích về thủ tục, luật áp dụng để giải quyết tranh chấp về chống bán phá giá trước WTO.",
  "Câu 26: Trình bày và phân tích phương thức thương lượng trong giải quyết tranh chấp hợp đồng thương mại quốc tế.",
  "Câu 27: So sánh phương thức giải quyết tranh chấp Tòa án và Trọng tài trong giải quyết tranh chấp Thương mại quốc tế.",
  "Câu 28: Trình bày và phân tích cơ chế giải quyết tranh chấp đầu tư thông qua Trung tâm trọng tài ICSID.",
  "Câu 29: Trình bày và phân tích khái niệm và thẩm quyền của trọng tài thương mại quốc tế.",
  "Câu 30: Trình bày và phân tích khái niệm, thẩm quyền và thủ tục giải quyết tranh chấp thông qua Trung tâm trọng tài phụ trợ ICSID.",
  "Câu 31: Trình bày và phân tích những nội dung cơ bản cần tư vấn cho doanh nghiệp Việt Nam đầu tư ra nước ngoài về vấn đề giải quyết tranh chấp với nước tiếp nhận đầu tư về Hợp đồng đầu tư.",
  "Câu 32: Trình bày và phân tích những nội dung cơ bản của việc công nhận và cho thi hành phán quyết của trọng tài nước ngoài.",
  "Câu 33: Trình bày và phân tích nguyên tắc xác định luật áp dụng trong giải quyết tranh chấp hợp đồng thương mại quốc tế theo pháp luật các nước nói chung và pháp luật Việt Nam.",
  "Câu 34: Trình bày và phân tích nguyên tắc giải quyết tranh chấp của cơ quan giải quyết tranh chấp của WTO (DSB).",
  "Câu 35: Trình bày và phân tích hiểu biết của anh/chị về sự phân biệt giữa hai phương thức trung gian/hòa giải và trọng tài.",
  "Câu 36: Phân biệt cơ chế trọng tài theo Điều 22 và Điều 25 của DSU.",
  "Câu 37: Trình bày và phân tích nguyên tắc xác định thẩm quyền của trọng tài trong giải quyết tranh chấp Hợp đồng thương mại quốc tế theo Pháp luật Việt Nam.",
  "Câu 38: Trình bày và phân tích về vấn đề hủy phán quyết trọng tài đầu tư quốc tế.",
  "Câu 39: Trình bày ưu và nhược điểm của việc sử dụng trọng tài để giải quyết tranh chấp hợp đồng thương mại quốc tế.",
  "Câu 40: Trình bày và phân tích về các chủ thể tham gia vào giải quyết tranh chấp thương mại quốc tế.",
  "Câu 41: Trình bày và phân tích về biện pháp bồi thường trong cơ chế giải quyết tranh chấp tại WTO.",
  "Câu 42: Trình bày và phân tích về luật áp dụng trong quá trình giải quyết tranh chấp tại WTO.",
  "Câu 43: Trình bày và phân tích về luật áp dụng trong quá trình giải quyết tranh chấp thương mại quốc tế.",
  "Câu 44: So sánh giữa tranh chấp đầu tư quốc tế và tranh chấp thương mại quốc tế.",
  "Câu 45: Trình bày và phân tích về các chủ thể tham gia vào giải quyết tranh chấp đầu tư quốc tế.",
  "Câu 46: Trình bày và phân tích về thực tiễn giải quyết tranh chấp về chống bán phá giá trước WTO.",
  "Câu 47: So sánh giữa tranh chấp thương mại công và tranh chấp thương mại tư.",
  "Câu 48: So sánh chế tài bồi thường và tạm hoãn thi hành nhượng bộ theo quy định của WTO.",
  "Câu 49: A (thương nhân Đức) ký hợp đồng mua bán hàng hóa với B (thương nhân Pháp). Trong quá trình thực hiện hợp đồng, hai bên phát sinh mâu thuẫn và đã lựa chọn trọng tài là phương thức giải quyết tranh chấp giữa họ. Hãy xác định luật áp dụng trong việc giải quyết tranh chấp tại trọng tài ở tình huống này.",
  "Câu 50: Trình bày và phân tích vai trò của Tòa án trong tố tụng trọng tài theo quy định của pháp luật Việt Nam.",
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Question = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-top: 20px;
  text-align: center;
  max-width: 800px;
  line-height: 1.5;
`;

function App() {
  const [remainingQuestions, setRemainingQuestions] = useState(questions);
  const [currentQuestions, setCurrentQuestions] = useState(["", ""]);

  const getRandomQuestions = () => {
    if (remainingQuestions.length < 2) {
      setCurrentQuestions(["Không còn câu hỏi nào nữa.", ""]);
      return;
    }

    const randomIndices = [
      Math.floor(Math.random() * remainingQuestions.length),
      Math.floor(Math.random() * remainingQuestions.length),
    ];

    const newQuestions = randomIndices.map(
      (index) => remainingQuestions[index]
    );
    const newRemainingQuestions = remainingQuestions.filter(
      (_, index) => !randomIndices.includes(index)
    );

    setRemainingQuestions(newRemainingQuestions);
    setCurrentQuestions(newQuestions);
  };

  return (
    <Container>
      <Title>Random questions for mimi</Title>
      <Button
        onClick={getRandomQuestions}
        disabled={remainingQuestions.length < 2}
      >
        {remainingQuestions.length < 2
          ? "No more questions / Reload the page to start over"
          : "Get Random Questions"}
      </Button>
      <QuestionWrapper>
        {currentQuestions.map((question, index) => (
          <Question key={index}>{question}</Question>
        ))}
      </QuestionWrapper>
    </Container>
  );
}

export default App;
