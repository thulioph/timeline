/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2995, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6580, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem02_01_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page02_01_01");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem02_01_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page02_01_02");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem02_02_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page02_02_01");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${voltar}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avancar}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9589876");