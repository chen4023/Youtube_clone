import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);
// 시간 변환 함수
export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}

// 줄바꿈 함수
export default function VideoDescription({ description }) {
  // 설명 데이터에서 줄바꿈 문자 "\n"을 HTML 줄바꿈 태그 <br>로 대체
  const formattedDescription = description.replace(/\n/g, "<br>");

  return <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />;
}
