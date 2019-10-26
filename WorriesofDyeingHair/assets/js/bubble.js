var width = 1510,
  height = 600,
  padding = 1.5, // separation between same-color circles
  clusterPadding = 6, // separation between different-color circles
  maxRadius = 48;

var n = 15, // total number of circles
  m = 1; // number of distinct clusters

var magni = 15;
var data = [{
  cluster: 0,
  radius: (12 * magni),
  stroke: "#ff0439",
  stroke_width: (1 / 2000),
  color: "(0, 176, 240)",
  sciName: "Hydrogen Peroxide",
  formula: "H₂O₂",
  name: "過氧化氫",
  url: "https://www.ch.ntu.edu.tw/~genchem99/msds/exp21/H2O2.pdf",
  text: "吞食可能致命、腐蝕眼睛和皮膚刺激感、皮膚刺痛及暫時性變白、紅腫、起泡、胃痛、嘔吐、眼疾。",
  limitation: "12%",
  IARC: "Group 3 (對動物可能致癌)",
  LD50: "2,000 mg/kg"
},
{
  cluster: 0,
  radius: (2 * magni),
  stroke: "#ff0439",
  stroke_width: (1 / 80),
  color: "(177, 160, 199)",
  sciName: "p-Phenylenediamine(PPD)",
  formula: "C₆H₈N₂",
  name: "對苯二胺",
  url: "http://drug.che.kuas.edu.tw/ch301/msds/msds0548.pdf",
  text: "會刺激皮膚及呼吸道，造成皮膚炎和蕁麻疹刺激感、支氣管性氣喘 、皮膚炎。PPD為染髮劑中主要的過敏原，許多廠商多有研發無PPD染髮劑(以其它類似物質代替)。",
  limitation: "2%",
  IARC: "3",
  LD50: "80 mg/kg"
},
{
  cluster: 0,
  radius: (3 * magni),
  stroke: "white",
  stroke_width: (1 / 375),
  color: "(250, 191, 143)",
  sciName: "p-Aminophenol",
  formula: "H₂NC₆H₄OH.",
  name: "4-氨基苯酚",
  url: "http://drug.che.kuas.edu.tw/ch301/msds_2/1391.pdf",
  text: "吞食有害 造成輕微皮膚刺激、造成眼睛刺激 可能造成皮膚過敏、懷疑對生育能力或胎兒造成傷害、對水生生物毒性非常大並具有長期持續影響、發紺。",
  limitation: "3%",
  IARC: "未列入致癌物之分級",
  LD50: "375 mg/Kg"
},
{
  cluster: 0,
  radius: (2 * magni),
  stroke: "white",
  stroke_width: (1 / 924),
  color: "(250, 191, 143)",
  sciName: "m-Aminophenol",
  formula: "C₆H₄(NH₂)(OH)",
  name: "3-氨基苯酚",
  url: "http://drug.che.kuas.edu.tw/ch301/msds_2/0177.pdf",
  text: "吞食有害、皮膚接觸有毒、可能造成皮膚過敏、對水生生物毒性非常大並具有長期持續影響、吸入可能致命、眼睛刺激。",
  limitation: "2%",
  IARC: "未列入致癌物之分級",
  LD50: "924 mg/kg"
},
{
  cluster: 0,
  radius: (3 * magni),
  stroke: "white",
  stroke_width: (1 / 951),
  color: "(250, 191, 143)",
  sciName: "o-Aminophenol",
  formula: "C₆H₄(OH)NH₂",
  name: "2-氨基苯酚",
  url: "http://drug.che.kuas.edu.tw/ch301/msds_2/0133.pdf",
  text: "吞食有害、懷疑造成遺傳性缺陷呼吸道刺激、皮膚刺激、眼睛刺激、血液損害、過敏反應。",
  limitation: "3%",
  IARC: "未列入致癌物之分級",
  LD50: "951 mg/kg"
},
{
  cluster: 0,
  radius: (4 * magni),
  stroke: "#ff0439",
  stroke_width: (1 / 100),
  color: "(250, 191, 143)",
  sciName: "Toluene-2,5-diamine / Toluene-2,5-diamine sulfate",
  formula: "C₆H₃(NH₂)₂CH₃",
  name: "甲苯二胺 / 甲苯二胺硫酸鹽",
  url: "http://drug.che.kuas.edu.tw/ch301/msds_2/0085.pdf<br />http://www.chemicalbook.com/ProductMSDSDetailCB7772087.htm",
  text: "吞食有毒、造成輕微皮膚刺激、造成眼睛刺激、可能造成皮膚過敏、對水生生物有毒並具有長期持續影響。有毒，對眼睛、皮膚、粘膜和上呼吸道有刺激作用、受熱分解出有毒氣體、對環境有危害、對水體可造成污染、可燃、具刺激性。",
  limitation: "4% (以Toluene-2,5-diamine計)",
  IARC: "3 / 未列入致癌物分級",
  LD50: "102 mg/kg / 98 mg/kg"
},
{
  cluster: 0,
  radius: (1 * magni),
  stroke: "white",
  stroke_width: (1 / 3600),
  color: "(250, 191, 143)",
  sciName: "4-Amino-2-hydroxytoluene",
  formula: "C₇H₉NO",
  name: "4-氨基-2-羥基甲苯",
  url: "http://www.chemblink.com/products/2835-95-2C.htm",
  text: "刺激眼睛、呼吸系統和皮膚。",
  limitation: "1%",
  IARC: "未列入致癌物分級",
  LD50: "3,600 mg/kg"
},
{
  cluster: 0,
  radius: (2 * magni),
  stroke: "#ff0439",
  stroke_width: (1 / 301),
  color: "(250, 191, 143)",
  sciName: "Resorcinol",
  formula: "C₆H₄(OH)₂",
  name: "間苯二酚",
  url: "http://drug.che.kuas.edu.tw/ch301/msds_2/1288.pdf",
  text: "吞食有害、造成皮膚刺激、造成眼睛刺激、對水生生物毒性非常大、嚴重者可能造成膚色變藍、呼吸困難甚至死亡。",
  limitation: "2%",
  IARC: "3",
  LD50: "301 mg/kg"
},
{
  cluster: 0,
  radius: (1 * magni),
  stroke: "white",
  stroke_width: (1 / 369),
  color: "(250, 191, 143)",
  sciName: "4-Chlororesorcinol",
  formula: "C₆H₅ClO₂",
  name: "4-氯間苯二酚",
  url: "https://www.alfa.com/zh-cn/content/msds/Taiwanese/b24076.pdf",
  text: "吞食有害、刺激眼睛、呼吸系統和皮膚、急性毒性、生殖毒性。",
  limitation: "1%",
  IARC: "未列入致癌物分級",
  LD50: "369 mg/kg"
},
{
  cluster: 0,
  radius: (1 * magni),
  stroke: "white",
  stroke_width: (1 / 200),
  color: "(250, 191, 143)",
  sciName: "2-methylresorcinol",
  formula: "C₇H₈O₂",
  name: "2-甲基-間苯二酚",
  url: "https://www.alfa.com/zh-cn/content/msds/Taiwanese/L08295.pdf",
  text: "吞食有害、刺激眼睛、呼吸系統和皮膚。",
  limitation: "1%",
  IARC: "未列入致癌物分級",
  LD50: "200 mg/kg"
},
{
  cluster: 0,
  radius: (2 * magni),
  stroke: "white",
  stroke_width: (1 / 1350),
  color: "(250, 191, 143)",
  sciName: "2-Methyl-5-Hydroxyethylaminophenol",
  formula: "C₉H₁₃NO₂",
  name: "2-甲基-5-羥乙氨基苯酚",
  url: "http://www.saapedia.org/cht/surfactant/?type=detail&id=8142",
  text: "對皮膚、眼睛有刺激性、對環境可能有危害、對水體應給予特別注意。",
  limitation: "2%",
  IARC: "未列入致癌物分級",
  LD50: "1,350 mg/kg"
},
{
  cluster: 0,
  radius: (6 * magni),
  stroke: "white",
  stroke_width: (1 / 350),
  color: "(250, 191, 143)",
  sciName: "Ammonia solution / Aqua Ammonia",
  formula: "NH₃",
  name: "氨水",
  url: "http://gclab.thu.edu.tw/MSDS/NH3.unlocked.pdf",
  text: "吞食有害、可能腐蝕金屬、造成嚴重皮膚灼傷和眼睛損傷、造成嚴重眼睛損傷、對水生生物毒性非常大。",
  limitation: "6%(以NH3 計)",
  IARC: "未列入致癌物分級",
  LD50: "350 mg/kg"
},
{
  cluster: 0,
  radius: (3 * magni),
  stroke: "white",
  stroke_width: (1 / 565),
  color: "(250, 191, 143)",
  sciName: "p-methylaminophenol sulfate",
  formula: "(C₇H₁₀NO)₂SO₄",
  name: "對甲基氨基酚硫酸鹽",
  url: "https://www.itsfun.com.tw/%E5%B0%8D%E7%94%B2%E5%9F%BA%E6%B0%A8%E5%9F%BA%E9%85%9A,%E7%A1%AB%E9%85%B8%E9%B9%BD/wiki-0873807-6336686",
  text: "吞食有害、與皮膚接觸可能導致過敏、對水生生物有極高毒性、可能對水體環境產生長期不良影響。",
  limitation: "3%",
  IARC: "未列入致癌物分級",
  LD50: "565 mg/kg"
},
{
  cluster: 0,
  radius: (2 * magni),
  stroke: "white",
  stroke_width: (1 / 1870),
  color: "(250, 191, 143)",
  sciName: "1-Naphthol",
  formula: "C₁₀H₈O",
  name: "1-萘酚",
  url: "http://www.i-chang.com.tw/MSDS/N/01%201-%E5%A5%88%E9%85%9A.pdf",
  text: "吞食有害、皮膚接觸有毒、造成皮膚刺激、造成嚴重眼睛損傷、可能造成呼吸道刺激。",
  limitation: "2%",
  IARC: "未列入致癌物分級",
  LD50: "1,870 mg/kg"
},
{
  cluster: 0,
  radius: (1 * magni),
  stroke: "white",
  stroke_width: (1 / 140),
  color: "(250, 191, 143)",
  sciName: "2,6-Diaminopyridine",
  formula: "C₅H₇N₃",
  name: "2,6-二氨基吡啶",
  url: "https://www.alfa.com/zh-cn/content/msds/Taiwanese/A12295.pdf",
  text: "吞食有害、引起嚴重的眼睛刺激、刺激呼吸系統、長時間皮膚接觸會有嚴重危害。",
  limitation: "1%",
  IARC: "未列入致癌物分級",
  LD50: "140 mg/kg"
}
];

// The largest node for each cluster.
var clusters = new Array(m);
clusters[0] = data[0];

var nodes = d3.range(n).map(function (i) {
  return data[i];
});

var force = d3.layout.force()
  .nodes(nodes)
  .size([width / 3, height])
  .gravity(0.01)
  .charge(0)
  .on("tick", tick)
  .start();

var svg = d3.select("#bubble").append("svg")
  //.attr("viewBox", "0 0" + " " + width + " " + height)
  //.attr("preserveAspectRatio", "xMidYMid meet");
.attr("width", width)
.attr("height", height);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .direction('e')
  .offset([-10, 0])
  .html(function (d) {
    return "<strong>學名 :</strong> <span style='color:orange'>" + d.sciName + "</span>" + "<br />" +
      //"<strong>化學式 :</strong> <span style='color:orange'>" + d.formula + "</span>" + "<br />" +
      "<strong>中文 :</strong> <span style='color:orange'>" + d.name + "</span>" + "<br />" +
      "<strong>限量 :</strong> <span style='color:orange'>" + d.limitation + "</span>" + "<br />" +
      "<strong>致癌性分級 :</strong> <span style='color:orange'>" + d.IARC + "</span>" + "<br />" +
      "<strong>危害辨識資料 :</strong> <span style='color:orange'>" + "<br />" + d.text + "</span>";
  })

svg.call(tip);

var circle = svg.selectAll("g")
  .data(nodes)
  .enter().append("g")
  .call(force.drag);

circle
  .append("circle")
  .attr("class", "circle")
  .attr("r", function (d) {
    return d.radius;
  })
  .style("fill", function (d) {
    return "rgb" + d.color;
  })
  .style("stroke", function (d) {
    return d.stroke;
  }).style("stroke-width", function (d) {
    if (d.stroke != "white") {
      //var w = d.stroke_width * 100 + 5;
      return "5px"
    } else {
      return 0;
    }
  })
  //.style("stroke-dasharray","10,5")
  .on("mouseover", tip.show)
  .on("mouseout", tip.hide)
  .on("touchstart", tip.show)
  .on("touchend", tip.hide);

circle
  //.append("text")
  //.attr("class", "text")
  //.attr("font-size", function (d) { return d.radius / d.name.length * 2 + "px"; })
  //.text(function (d) { return d.name; })
  .each(function (d) {
    if (d.name != undefined) {
      var lines = wordwrap2(d.name)
      var h = 0;
      for (var i = 1; i < lines.length; i++) {
        h += (d.radius / lines[i].length);
      }
      for (var i = 0; i < lines.length; i++) {
        d3.select(this).append("text")
          .attr("class", "text")
          .attr("font-size", function (d) {
            return d.radius / lines[i].length * 1.9 + "px";
          })
          .attr("dy", function (d) {
            var y = 0;
            if (lines.length > 1) {
              y = -h;
              if (i > 0) {
                for (var j = 1; j < i + 1; j++) {
                  y += (d.radius / lines[j - 1].length + d.radius / lines[j].length);
                }
              }
            }
            //console.log(y)
            return y;
          })
          .text(lines[i])
      }
    }
  })

function tick(e) {
  circle
    .each(cluster(0.05 * e.alpha * e.alpha))
    //.each(cluster(10 * e.alpha * e.alpha))
    .each(collide(0.5))
    //.each(collide(10))  // game mode
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
}

// Move d to be adjacent to the cluster node.
function cluster(alpha) {
  return function (d) {
    var cluster = clusters[d.cluster];
    if (cluster === d) return;
    var x = d.x - cluster.x,
      y = d.y - cluster.y,
      l = Math.sqrt(x * x + y * y),
      r = d.radius + cluster.radius;
    if (l != r) {
      l = (l - r) / l * alpha;
      d.x -= x *= l;
      d.y -= y *= l;
      cluster.x += x;
      cluster.y += y;
    }
  };
}

// Resolves collisions between d and all other circles.
function collide(alpha) {
  var quadtree = d3.geom.quadtree(nodes);
  return function (d) {
    var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
      nx1 = d.x - r,
      nx2 = d.x + r,
      ny1 = d.y - r,
      ny2 = d.y + r;
    quadtree.visit(function (quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
          y = d.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}

// Wrape text
function wordwrap2(text) {
  var lines = text.split(" / ")
  return lines
}