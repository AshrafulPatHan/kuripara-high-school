import React from "react";

export default function ConvertedSummaryTable() {
  const tableStyle: React.CSSProperties = { borderCollapse: "collapse" };
  const cellStyle: React.CSSProperties = {
    border: "1px solid #000",
    padding: "0in 0.08in",
    verticalAlign: "top",
  };

  return (
    <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible">
      <div className="-mx-4 px-4 md:mx-0 md:px-0">
        <table width={620} cellPadding={7} cellSpacing={0} style={tableStyle}>
          <colgroup>
            <col style={{ width: 110 }} />
            <col style={{ width: 85 }} />
            <col style={{ width: 88 }} />
            <col style={{ width: 87 }} />
            <col style={{ width: 74 }} />
            <col style={{ width: 90 }} />
          </colgroup>

          <tbody>
            {/* Header */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={{ ...cellStyle }} height={13}>
                <p style={{ textAlign: "center" }}>
                  <strong style={{ fontSize: 14 }}>সন</strong>
                </p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}>
                  <strong style={{ fontSize: 14 }}>মোট পরীক্ষার্থী</strong>
                </p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}>
                  <strong style={{ fontSize: 14 }}>কৃতকার্য</strong>
                </p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}>
                  <strong style={{ fontSize: 14 }}>অকৃতকার্য</strong>
                </p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}>
                  <strong style={{ fontSize: 14 }}>জিপিএ-৫</strong>
                </p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}>
                  <strong style={{ fontSize: 14 }}>পাশের হার</strong>
                </p>
              </td>
            </tr>

            {/* Row: 2025 */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={{ ...cellStyle }} height={39}>
                <p style={{ fontSize: 16 }}>এস.এস.সি-২০২৫</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}><strong style={{ fontSize: 14 }}>119</strong></p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}><strong style={{ fontSize: 14 }}>88</strong></p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}><strong style={{ fontSize: 14 }}>31</strong></p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}><strong style={{ fontSize: 14 }}>02</strong></p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center" }}><strong style={{ fontSize: 14 }}>73.95%</strong></p>
              </td>
            </tr>

            {/* Row: 2024 */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={{ ...cellStyle }} height={38}>
                <p style={{ fontSize: 16 }}>এস.এস.সি-২০২৪</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>139</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>139</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>0</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>15</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>100%</p>
              </td>
            </tr>

            {/* Row: 2023 */}
            <tr style={{ verticalAlign: "top" }}>
              <td style={{ ...cellStyle }} height={37}>
                <p style={{ fontSize: 16 }}>এস.এস.সি-২০২৩</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>145</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>134</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>11</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>05</p>
              </td>
              <td style={cellStyle}>
                <p style={{ textAlign: "center", fontSize: 16 }}>92.41%</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
