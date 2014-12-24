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
      
      
      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3624, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9600, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16078, function(sym, e) {
         // insert code here
         sym.stop();
         
         

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

      Symbol.bindElementAction(compId, symbolName, "${imagem01_03_04}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_03_04");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_03_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_03_01");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_03_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_03_03");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_03_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_03_02");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_01_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_01_03");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_01_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_01_02");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_01_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_01_01");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_02_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_02_03");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_02_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_02_01");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem01_02_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page01_02_02");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-21969087");