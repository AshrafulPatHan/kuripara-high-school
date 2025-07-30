import React from "react";

export default function ConvertedSummaryTable() {
  const tableStyle: React.CSSProperties = { borderCollapse: "collapse" };
  const cellStyle: React.CSSProperties = {
    border: "1px solid #000",
    padding: "0in 0.08in",
    verticalAlign: "top",
  };
  const sutonny: React.CSSProperties = { fontFamily: "SutonnyMJ, serif" };

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
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>mb</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>
                  †gvU cixÿv_x©
                </span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>K…ZKvh©</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>AK…ZKvh©</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>wRwcG-5</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>cv‡ki nvi</span>
              </p>
            </td>
          </tr>

          {/* Row: 2025 */}
          <tr style={{ verticalAlign: "top" }}>
            <td style={{ ...cellStyle }} height={39}>
              <p>
                <span style={{ ...sutonny, fontSize: 16 }}>Gm.Gm.wm-2025</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>119</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>88</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>31</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>02</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 14, fontWeight: 700 }}>73.95%</span>
              </p>
            </td>
          </tr>

          {/* Row: 2024 */}
          <tr style={{ verticalAlign: "top" }}>
            <td style={{ ...cellStyle }} height={38}>
              <p>
                <span style={{ ...sutonny, fontSize: 16 }}>Gm.Gm.wm-2024</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>139</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>139</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>0</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>15</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>100%</span>
              </p>
            </td>
          </tr>

          {/* Row: 2023 */}
          <tr style={{ verticalAlign: "top" }}>
            <td style={{ ...cellStyle }} height={37}>
              <p>
                <span style={{ ...sutonny, fontSize: 16 }}>Gm.Gm.wm-2023</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>145</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>134</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>11</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>05</span>
              </p>
            </td>
            <td style={cellStyle}>
              <p style={{ textAlign: "center" }}>
                <span style={{ ...sutonny, fontSize: 16 }}>92.41%</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  );
}
