import Script from "next/script";
import React, { useEffect } from "react";

function Preloader() {
  useEffect(() => {
    /*!
     * Particleground
     *
     * @author Jonathan Nicol - @mrjnicol
     * @version 1.1.0
     * @description Creates a canvas based particle system background
     *
     * Inspired by http://requestlab.fr/ and http://disruptivebydesign.com/
     */
    !(function (a, b) {
      "use strict";
      function c(a) {
        a = a || {};
        for (var b = 1; b < arguments.length; b++) {
          var c = arguments[b];
          if (c)
            for (var d in c)
              c.hasOwnProperty(d) &&
                ("object" == typeof c[d]
                  ? deepExtend(a[d], c[d])
                  : (a[d] = c[d]));
        }
        return a;
      }
      function d(d, g) {
        function h() {
          if (y) {
            (r = b.createElement("canvas")),
              (r.className = "pg-canvas"),
              (r.style.display = "block"),
              d.insertBefore(r, d.firstChild),
              (s = r.getContext("2d")),
              i();
            for (
              var c = Math.round((r.width * r.height) / g.density), e = 0;
              c > e;
              e++
            ) {
              var f = new n();
              f.setStackPos(e), z.push(f);
            }
            a.addEventListener(
              "resize",
              function () {
                k();
              },
              !1
            ),
              b.addEventListener(
                "mousemove",
                function (a) {
                  (A = a.pageX), (B = a.pageY);
                },
                !1
              ),
              D &&
                !C &&
                a.addEventListener(
                  "deviceorientation",
                  function () {
                    (F = Math.min(Math.max(-event.beta, -30), 30)),
                      (E = Math.min(Math.max(-event.gamma, -30), 30));
                  },
                  !0
                ),
              j(),
              q("onInit");
          }
        }
        function i() {
          (r.width = d.offsetWidth),
            (r.height = d.offsetHeight),
            (s.fillStyle = g.dotColor),
            (s.strokeStyle = g.lineColor),
            (s.lineWidth = g.lineWidth);
        }
        function j() {
          if (y) {
            (u = a.innerWidth),
              (v = a.innerHeight),
              s.clearRect(0, 0, r.width, r.height);
            for (var b = 0; b < z.length; b++) z[b].updatePosition();
            for (var b = 0; b < z.length; b++) z[b].draw();
            G || (t = requestAnimationFrame(j));
          }
        }
        function k() {
          i();
          for (
            var a = d.offsetWidth, b = d.offsetHeight, c = z.length - 1;
            c >= 0;
            c--
          )
            (z[c].position.x > a || z[c].position.y > b) && z.splice(c, 1);
          var e = Math.round((r.width * r.height) / g.density);
          if (e > z.length)
            for (; e > z.length; ) {
              var f = new n();
              z.push(f);
            }
          else e < z.length && z.splice(e);
          for (c = z.length - 1; c >= 0; c--) z[c].setStackPos(c);
        }
        function l() {
          G = !0;
        }
        function m() {
          (G = !1), j();
        }
        function n() {
          switch (
            (this.stackPos,
            (this.active = !0),
            (this.layer = Math.ceil(3 * Math.random())),
            (this.parallaxOffsetX = 0),
            (this.parallaxOffsetY = 0),
            (this.position = {
              x: Math.ceil(Math.random() * r.width),
              y: Math.ceil(Math.random() * r.height),
            }),
            (this.speed = {}),
            g.directionX)
          ) {
            case "left":
              this.speed.x = +(
                -g.maxSpeedX +
                Math.random() * g.maxSpeedX -
                g.minSpeedX
              ).toFixed(2);
              break;
            case "right":
              this.speed.x = +(
                Math.random() * g.maxSpeedX +
                g.minSpeedX
              ).toFixed(2);
              break;
            default:
              (this.speed.x = +(
                -g.maxSpeedX / 2 +
                Math.random() * g.maxSpeedX
              ).toFixed(2)),
                (this.speed.x += this.speed.x > 0 ? g.minSpeedX : -g.minSpeedX);
          }
          switch (g.directionY) {
            case "up":
              this.speed.y = +(
                -g.maxSpeedY +
                Math.random() * g.maxSpeedY -
                g.minSpeedY
              ).toFixed(2);
              break;
            case "down":
              this.speed.y = +(
                Math.random() * g.maxSpeedY +
                g.minSpeedY
              ).toFixed(2);
              break;
            default:
              (this.speed.y = +(
                -g.maxSpeedY / 2 +
                Math.random() * g.maxSpeedY
              ).toFixed(2)),
                (this.speed.x += this.speed.y > 0 ? g.minSpeedY : -g.minSpeedY);
          }
        }
        function o(a, b) {
          return b ? void (g[a] = b) : g[a];
        }
        function p() {
          console.log("destroy"),
            r.parentNode.removeChild(r),
            q("onDestroy"),
            f && f(d).removeData("plugin_" + e);
        }
        function q(a) {
          void 0 !== g[a] && g[a].call(d);
        }
        var r,
          s,
          t,
          u,
          v,
          w,
          x,
          y = !!b.createElement("canvas").getContext,
          z = [],
          A = 0,
          B = 0,
          C = !navigator.userAgent.match(
            /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
          ),
          D = !!a.DeviceOrientationEvent,
          E = 0,
          F = 0,
          G = !1;
        return (
          (g = c({}, a[e].defaults, g)),
          (n.prototype.draw = function () {
            s.beginPath(),
              s.arc(
                this.position.x + this.parallaxOffsetX,
                this.position.y + this.parallaxOffsetY,
                g.particleRadius / 2,
                0,
                2 * Math.PI,
                !0
              ),
              s.closePath(),
              s.fill(),
              s.beginPath();
            for (var a = z.length - 1; a > this.stackPos; a--) {
              var b = z[a],
                c = this.position.x - b.position.x,
                d = this.position.y - b.position.y,
                e = Math.sqrt(c * c + d * d).toFixed(2);
              e < g.proximity &&
                (s.moveTo(
                  this.position.x + this.parallaxOffsetX,
                  this.position.y + this.parallaxOffsetY
                ),
                g.curvedLines
                  ? s.quadraticCurveTo(
                      Math.max(b.position.x, b.position.x),
                      Math.min(b.position.y, b.position.y),
                      b.position.x + b.parallaxOffsetX,
                      b.position.y + b.parallaxOffsetY
                    )
                  : s.lineTo(
                      b.position.x + b.parallaxOffsetX,
                      b.position.y + b.parallaxOffsetY
                    ));
            }
            s.stroke(), s.closePath();
          }),
          (n.prototype.updatePosition = function () {
            if (g.parallax) {
              if (D && !C) {
                var a = (u - 0) / 60;
                w = (E - -30) * a + 0;
                var b = (v - 0) / 60;
                x = (F - -30) * b + 0;
              } else (w = A), (x = B);
              (this.parallaxTargX =
                (w - u / 2) / (g.parallaxMultiplier * this.layer)),
                (this.parallaxOffsetX +=
                  (this.parallaxTargX - this.parallaxOffsetX) / 10),
                (this.parallaxTargY =
                  (x - v / 2) / (g.parallaxMultiplier * this.layer)),
                (this.parallaxOffsetY +=
                  (this.parallaxTargY - this.parallaxOffsetY) / 10);
            }
            var c = d.offsetWidth,
              e = d.offsetHeight;
            switch (g.directionX) {
              case "left":
                this.position.x + this.speed.x + this.parallaxOffsetX < 0 &&
                  (this.position.x = c - this.parallaxOffsetX);
                break;
              case "right":
                this.position.x + this.speed.x + this.parallaxOffsetX > c &&
                  (this.position.x = 0 - this.parallaxOffsetX);
                break;
              default:
                (this.position.x + this.speed.x + this.parallaxOffsetX > c ||
                  this.position.x + this.speed.x + this.parallaxOffsetX < 0) &&
                  (this.speed.x = -this.speed.x);
            }
            switch (g.directionY) {
              case "up":
                this.position.y + this.speed.y + this.parallaxOffsetY < 0 &&
                  (this.position.y = e - this.parallaxOffsetY);
                break;
              case "down":
                this.position.y + this.speed.y + this.parallaxOffsetY > e &&
                  (this.position.y = 0 - this.parallaxOffsetY);
                break;
              default:
                (this.position.y + this.speed.y + this.parallaxOffsetY > e ||
                  this.position.y + this.speed.y + this.parallaxOffsetY < 0) &&
                  (this.speed.y = -this.speed.y);
            }
            (this.position.x += this.speed.x),
              (this.position.y += this.speed.y);
          }),
          (n.prototype.setStackPos = function (a) {
            this.stackPos = a;
          }),
          h(),
          { option: o, destroy: p, start: m, pause: l }
        );
      }
      var e = "particleground",
        f = a.jQuery;
      (a[e] = function (a, b) {
        return new d(a, b);
      }),
        (a[e].defaults = {
          minSpeedX: 0.1,
          maxSpeedX: 0.7,
          minSpeedY: 0.1,
          maxSpeedY: 0.7,
          directionX: "center",
          directionY: "center",
          density: 1e4,
          dotColor: "#666666",
          lineColor: "#666666",
          particleRadius: 7,
          lineWidth: 1,
          curvedLines: !1,
          proximity: 100,
          parallax: !0,
          parallaxMultiplier: 5,
          onInit: function () {},
          onDestroy: function () {},
        }),
        f &&
          (f.fn[e] = function (a) {
            if ("string" == typeof arguments[0]) {
              var b,
                c = arguments[0],
                g = Array.prototype.slice.call(arguments, 1);
              return (
                this.each(function () {
                  f.data(this, "plugin_" + e) &&
                    "function" == typeof f.data(this, "plugin_" + e)[c] &&
                    (b = f.data(this, "plugin_" + e)[c].apply(this, g));
                }),
                void 0 !== b ? b : this
              );
            }
            return "object" != typeof a && a
              ? void 0
              : this.each(function () {
                  f.data(this, "plugin_" + e) ||
                    f.data(this, "plugin_" + e, new d(this, a));
                });
          });
    })(window, document),
      /**
       * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
       * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
       * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
       * @license: MIT license
       */ (function () {
        for (
          var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;
          c < b.length && !window.requestAnimationFrame;
          ++c
        )
          (window.requestAnimationFrame =
            window[b[c] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[b[c] + "CancelAnimationFrame"] ||
              window[b[c] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (b) {
            var c = new Date().getTime(),
              d = Math.max(0, 16 - (c - a)),
              e = window.setTimeout(function () {
                b(c + d);
              }, d);
            return (a = c + d), e;
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (a) {
              clearTimeout(a);
            });
      })();

    particleground(document.getElementById("particles-foreground"), {
      dotColor: "rgba(6, 216, 137, 1)",
      lineColor: "rgba(6, 216, 137, 0.1)",
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 4, // Dot size
    });

    particleground(document.getElementById("particles-background"), {
      dotColor: "rgba(6, 216, 137, 0.5)",
      lineColor: "rgba(6, 216, 137, 0.1)",
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 2, // Dot size
    });
  });
  return (
    <div className="preloader">
      <div id="particles-background" className="vertical-centered-box" />
      <div id="particles-foreground" className="vertical-centered-box" />
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle" />
          <div className="loader-line-mask">
            <div className="loader-line" />
          </div>
          <svg
            width={80}
            height={80}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.78169 12.5239C5.82394 12.5239 7.48732 14.1437 7.56056 16.1676C7.56197 16.1958 7.56338 16.2254 7.56338 16.2549V16.3056V20.5958V24.2366V24.2606V24.2817C7.57465 24.7887 7.99014 25.1958 8.49859 25.1958C9.00704 25.1958 9.42113 24.7887 9.4338 24.2817V24.2606V24.2366V23.269V20.5958V8.12676C9.42394 8.0169 9.41831 7.90704 9.41831 7.79577C9.41831 5.70704 11.1113 4.01408 13.2 4.01408C14.9901 4.01408 16.4887 5.25634 16.8817 6.92535C16.9465 7.08873 16.9831 7.26479 16.9831 7.4507V7.79577V28.1606V31.7662H16.9845L16.9831 31.8254C16.9831 32.3423 17.4014 32.7606 17.9169 32.7606C18.4338 32.7606 18.8521 32.3423 18.8521 31.8254L18.8493 31.7662H18.8521V28.1606V6.92535L18.8535 6.87042L18.8521 6.7831C18.8521 4.69437 20.5451 3 22.6338 3C24.7225 3 26.4155 4.69437 26.4155 6.7831V6.87042V6.92535V32.5718V36.1859V36.2127V36.2366V36.2408C26.4197 36.7549 26.8366 37.1718 27.3507 37.1718C27.8662 37.1718 28.2831 36.7549 28.2859 36.2408V36.2366V36.2127V36.1873V32.5718V8.5338L28.2873 8.46761L28.2859 8.36338C28.2859 6.27465 29.9789 4.58169 32.0676 4.58169C33.8944 4.58169 35.4183 5.87606 35.7718 7.59718C35.8225 7.74225 35.8507 7.89859 35.8507 8.06056V8.36338V36.3775V39.9507H35.8549L35.8507 40.0423C35.8507 40.5592 36.269 40.9775 36.7845 40.9775C37.3014 40.9775 37.7197 40.5592 37.7197 40.0423L37.7141 39.9507H37.7197V36.3775V14.9437C37.7197 14.8606 37.7268 14.7789 37.7408 14.6986C37.7268 14.5676 37.7197 14.4324 37.7197 14.2972C37.7197 12.2085 39.4127 10.5155 41.5014 10.5155C43.4113 10.5155 44.9901 11.931 45.2465 13.7718C45.2704 13.8746 45.2831 13.9817 45.2831 14.0915V14.2972V27.8408V31.1887V31.4817V31.4958V31.507C45.2831 32.0225 45.7028 32.4408 46.2183 32.4408C46.7338 32.4408 47.1535 32.0225 47.1535 31.507V31.4958V31.4817V27.8408V22.9296C47.1535 22.1451 47.7944 21.5056 48.5761 21.5056H48.5775C49.3592 21.5056 50 22.1451 50 22.9296V31.507V31.6254C50 31.6887 49.9958 31.7493 49.9887 31.8099C49.8338 33.7563 48.2042 35.2887 46.2183 35.2887C44.1296 35.2887 42.4366 33.5944 42.4366 31.507C42.4366 31.4408 42.438 31.3746 42.4423 31.3099C42.438 31.2704 42.4366 31.2296 42.4366 31.1887V17.962V14.3211V14.2972V14.2732V14.2493H42.4352C42.4099 13.7549 42.0014 13.362 41.5014 13.362C41.0014 13.362 40.593 13.7549 40.5676 14.2493H40.5662V14.2732V14.2972V14.3211V14.9437V17.962V39.9873V40.0183V40.0423C40.5662 42.131 38.8732 43.8239 36.7845 43.8239C34.6958 43.8239 33.0028 42.131 33.0028 40.0423V39.9986V39.9563V12.0282V8.38732V8.36338V8.35634C32.9986 7.84366 32.5817 7.42817 32.0676 7.42817C31.5535 7.42817 31.1366 7.84366 31.1324 8.35634V8.36338V8.38732V8.5338V12.0282V36.1873V36.2155V36.2366C31.1324 38.3254 29.4394 40.0183 27.3507 40.0183C25.262 40.0183 23.569 38.3254 23.569 36.2366V36.2155V36.1859V10.4479V6.92535V6.80704V6.79718V6.7831C23.569 6.2662 23.1507 5.84789 22.6338 5.84789C22.1183 5.84789 21.7 6.2662 21.7 6.7831V6.79718V6.80704V6.92535V10.4479V31.8085V31.8254L21.6986 31.8451C21.6887 33.9239 20 35.607 17.9169 35.607C15.8352 35.607 14.1465 33.9254 14.1352 31.8451V31.8254V31.8085V11.462V7.86761H14.1324L14.1352 7.79577C14.1352 7.28028 13.7169 6.86056 13.2 6.86056C12.7352 6.86056 12.3479 7.20282 12.2775 7.6493C12.2789 7.67887 12.2803 7.70845 12.2803 7.73944V23.269C12.2803 23.3986 12.2634 23.5239 12.231 23.6437C12.2634 23.8437 12.2803 24.0507 12.2803 24.2606C12.2803 26.3493 10.5873 28.0423 8.49859 28.0423C6.56479 28.0423 4.97042 26.5901 4.74366 24.7169C4.72535 24.6282 4.7169 24.5352 4.7169 24.4394V24.2606V19.9718V16.3296V16.3056C4.7169 15.7901 4.29718 15.3718 3.78169 15.3718C3.2662 15.3718 2.84648 15.7901 2.84648 16.3056V16.3296V19.9718V21.1916C2.84648 21.9746 2.20563 22.6155 1.42394 22.6155H1.42254C0.640845 22.6155 0 21.9746 0 21.1916V16.3056V16.2535C0 16.2254 0.00140852 16.1958 0.00281697 16.1676C0.0760564 14.1437 1.73944 12.5239 3.78169 12.5239ZM29.4845 43.2831C30.2634 43.2831 30.8944 43.9141 30.8944 44.693C30.8944 45.4718 30.2634 46.1042 29.4845 46.1042C28.7056 46.1042 28.0732 45.4718 28.0732 44.693C28.0732 43.9141 28.7056 43.2831 29.4845 43.2831ZM48.5789 17.3873C49.3577 17.3873 49.9901 18.0197 49.9901 18.7986C49.9901 19.5775 49.3577 20.2085 48.5789 20.2085C47.8 20.2085 47.169 19.5775 47.169 18.7986C47.169 18.0197 47.8 17.3873 48.5789 17.3873ZM6.04648 8.26761C6.82535 8.26761 7.45634 8.89859 7.45634 9.67746C7.45634 10.4577 6.82535 11.0887 6.04648 11.0887C5.26761 11.0887 4.63521 10.4577 4.63521 9.67746C4.63521 8.89859 5.26761 8.26761 6.04648 8.26761Z"
              fill="url(#paint0_linear_383_211)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_383_211"
                x1="-0.180282"
                y1="36.8577"
                x2="62.7901"
                y2="36.8577"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00CCFF" />
                <stop offset="1" stop-color="#99FF00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
