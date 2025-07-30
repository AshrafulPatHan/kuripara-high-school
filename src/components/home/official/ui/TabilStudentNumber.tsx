import React from "react";

export default function TabilStudentNumber() {
  const tableStyle: React.CSSProperties = { borderCollapse: "collapse" };
  const thtdStyle: React.CSSProperties = {
    border: "1px solid #000",
    padding: "0in 0.08in",
    verticalAlign: "top",
  };

  return (
    <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible">
      <div className="-mx-4 px-4 md:mx-0 md:px-0">
        <table width={623} cellPadding={7} cellSpacing={0} style={tableStyle}>
          <colgroup>
            <col style={{ width: 27 }} />
            <col style={{ width: 152 }} />
            <col style={{ width: 90 }} />
            <col style={{ width: 90 }} />
            <col style={{ width: 90 }} />
            <col style={{ width: 89 }} />
          </colgroup>

          <tbody>
            {/* Header row */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>ক্রম</p>
              </td>
              <td style={thtdStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>শ্রেণি</p>
              </td>
              <td style={thtdStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>ছেলে</p>
              </td>
              <td style={thtdStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>মেয়ে</p>
              </td>
              <td style={thtdStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>মোট</p>
              </td>
              <td style={thtdStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>মন্তব্য</p>
              </td>
            </tr>

            {/* Row 1 */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}><p>1.</p></td>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>ষষ্ঠ</p></td>
              <td style={thtdStyle}><p>95</p></td>
              <td style={thtdStyle}><p>100</p></td>
              <td style={thtdStyle}><p>195</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>

            {/* Row 2 */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}><p>2.</p></td>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>সপ্তম</p></td>
              <td style={thtdStyle}><p>100</p></td>
              <td style={thtdStyle}><p>102</p></td>
              <td style={thtdStyle}><p>202</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>

            {/* Row 3 */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}><p>3.</p></td>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>অষ্টম</p></td>
              <td style={thtdStyle}><p>85</p></td>
              <td style={thtdStyle}><p>100</p></td>
              <td style={thtdStyle}><p>185</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>

            {/* Rows 4.x (first cell has rowSpan=3) */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle} rowSpan={3}>
                <p style={{ marginBottom: 0 }}>&nbsp;</p>
                <p>4.</p>
              </td>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>নবম বিজ্ঞান</p></td>
              <td style={thtdStyle}><p>10</p></td>
              <td style={thtdStyle}><p>10</p></td>
              <td style={thtdStyle}><p>20</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>নবম ব্যবসা শিক্ষা</p></td>
              <td style={thtdStyle}><p>35</p></td>
              <td style={thtdStyle}><p>30</p></td>
              <td style={thtdStyle}><p>60</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>নবম মানবিক</p></td>
              <td style={thtdStyle}><p>35</p></td>
              <td style={thtdStyle}><p>45</p></td>
              <td style={thtdStyle}><p>80</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>

            {/* Rows 5.x (first cell has rowSpan=4) */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle} rowSpan={4}>
                <p style={{ marginBottom: 0 }}>&nbsp;</p>
                <p>5</p>
              </td>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>দশম বিজ্ঞান</p></td>
              <td style={thtdStyle}><p>12</p></td>
              <td style={thtdStyle}><p>8</p></td>
              <td style={thtdStyle}><p>20</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>দশম ব্যবসা শিক্ষা</p></td>
              <td style={thtdStyle}><p>45</p></td>
              <td style={thtdStyle}><p>35</p></td>
              <td style={thtdStyle}><p>70</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>দশম মানবিক</p></td>
              <td style={thtdStyle}><p>50</p></td>
              <td style={thtdStyle}><p>35</p></td>
              <td style={thtdStyle}><p>85</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>
            <tr style={{ verticalAlign: "top" }}>
              <td style={thtdStyle}><p style={{ fontSize: 16 }}>সর্বমোট শিক্ষার্থী</p></td>
              <td style={thtdStyle}><p>467</p></td>
              <td style={thtdStyle}><p>463</p></td>
              <td style={thtdStyle}><p>930</p></td>
              <td style={thtdStyle}><p>&nbsp;</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
