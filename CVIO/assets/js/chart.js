/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/chart@0.1.2/index.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var lib = require("./lib"),
    legend = require("./lib/legend"),
    Interaction = require("./lib/interaction"),
    hat = require("hat"),
    rack = hat.rack(),
    series = function () {
        for (var t = [].slice.call(arguments, 0),
            i = 0; i < t.length; i++) {
                var e = t[i],
                n = rack(); e.id = n,
                    this.buffer[n] = document.createElement("canvas"),
                    this.bufferctx[n] = this.buffer[n].getContext("2d"),
                    this.sources.push(e)
        }
    },
    to = function (t) {
        this.wrappingDivId = "_".concat(rack()).slice(0, 10),
            lib.setCanvas(t, this),
            this.sources.forEach(lib.setSource.bind(this)),
            this.sources.forEach(function (t) {
                var i = this; t.on("data",
                    function (t) {
                        i.currentdata = t
                    })
            }, this), $(this.interaction).css("position", "absolute"), this.interaction.width = t.width, this.interaction.height = t.height, $(t).before(this.interaction); var i = new Interaction({ ctx: this.interactionctx, canvas: this.interaction, sources: this.sources, color: this.color, wrappingDivId: this.wrappingDivId }); lib.setInteraction(i), $("#".concat(this.wrappingDivId)).mousemove(i.mousemove), $("#".concat(this.wrappingDivId)).mouseout(i.stop)
    }, legendfn = function (t) { this.legend_el = t, legendfn.clear = lib.legendClear.bind({ legend_el: this.legend_el }) }, inspect = function () { return this.currentdata }, chart = function () { this.buffer = {}, this.bufferctx = {}, this.currentdata = void 0, this.sources = [], this.to = to, this.series = series, this.legend = legendfn, this.inspect = inspect, this.legendobj = new legend, this.interaction = document.createElement("canvas"), this.interactionctx = this.interaction.getContext("2d"), this.bgcolor = void 0, this.color = { grid: "#c9d6de", bg: "#FFF", xlabel: "#000", xline: "#000", ylabel: "#000", yline: "#000", interactionline: "#000", line: void 0 }, this.rendermode = "line", this.custom = { boundaries: { left: void 0, right: void 0 }, cropFn: void 0 }, this.pause = !1 }; exports = module.exports = chart;
//# sourceMappingURL=/sm/e505a87d8c8f248c28e2d00ad6cb72944b2131dc3fa7d0d4d5014429bef1c8d3.map


