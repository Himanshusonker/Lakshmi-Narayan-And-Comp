const Treeanimation=()=>{

var sceneTree = new Scene({
    ".tree" : { 0: {transform:"scale(0)"},
    1.5: {transform:"scale(1)"}},
    ".background>.flower": function (i) 
    {
      return {
        0: {opacity: 0, transform: "translateY(0px) rotate(0deg)"},
        1: {opacity: 1},
        4: {opacity: 1},
        5: {opacity: 0, transform: "translateY(300px) rotate(360deg)"},
        options: {
          delay: 7 + i,
          iterationCount: "infinite"
        },
      };
    },
  }, {
    selector: true
  });
  
  
  var branchs = document.querySelectorAll(".tree .branch, .tree .leaf, .tree .flower1");
  var depths = [0, 0, 0];
  
  for (var i = 0; i < branchs.length; ++i) {
    var sceneItem = sceneTree.newItem("item" + i);
    var className = branchs[i].className;
  
    if (~className.indexOf("branch-inner")) {
      ++depths[1];
      depths[2] = 0;
    } else if (~className.indexOf("branch")) {
      ++depths[0];
      depths[1] = 0;
      depths[2] = 0;
    } else if (~className.indexOf("leaf") || ~className.indexOf("flower1")) {
      ++depths[2];
    }
    sceneItem.setElement(branchs[i]);
    sceneItem.setCSS(0, ["transform"]);
  
    var time = 1 + depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
    sceneItem.set(time, "transform", "scale", 0);
    sceneItem.set(time + 1, "transform", "scale", 1);
  }
  
  sceneTree.playCSS();
    
      

    return(
        <>  
          <div class="background">
  <div class="flower roundpetal petal5 flower1">
    <div class="petal">
      <div class="petal">
        <div class="petal">
        </div>
      </div>
    </div>
  </div>
  <div class="flower roundpetal petal5 flower2 blueflower">
    <div class="petal">
      <div class="petal">
        <div class="petal">
        </div>
      </div>
    </div>
  </div>
  <div class="flower roundpetal petal5 flower3 yellowflower">
    <div class="petal">
      <div class="petal">
        <div class="petal">
        </div>
      </div>
    </div>
  </div>
  <div class="flower roundpetal petal5 flower4 purpleflower">
    <div class="petal">
      <div class="petal">
        <div class="petal">
        </div>
      </div>
    </div>
  </div>
  <div class="slope"></div>
  <div class="tree">
    <div class="leaf leaf1"></div>
    <div class="leaf leaf2"></div>


    <div class="branch left branch1">
      <div class="branch left branch-inner1">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>                
        <div class="leaf leaf3"></div>
        <div class="heart flower1 blueflower">
        </div>
      </div>
      <div class="branch left branch-inner2">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>                
        <div class="leaf leaf3"></div>
        <div class="tulip flower1 redflower">
          <div class="peak"></div>
        </div>
      </div>
      <div class="branch left branch-inner3">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>
      </div>
      <div class="flower petal5 flower1 redflower">
        <div class="petal">
          <div class="petal">
            <div class="petal">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="branch right branch2">
      <div class="branch left branch-inner1">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>        
        <div class="leaf leaf3"></div>
        <div class="flower petal5 flower1 blueflower">
          <div class="petal">
            <div class="petal">
              <div class="petal">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="branch right branch-inner2">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>                
        <div class="leaf leaf3"></div>
        <div class="tulip flower1 greenflower">
          <div class="peak"></div>
        </div>
      </div>
      <div class="branch right branch-inner3">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>
        <div class="leaf leaf3"></div>
        <div class="branch left branch-inner4">
          <div class="leaf leaf1"></div>
          <div class="flower petal5 flower1 yellowflower">
            <div class="petal">
              <div class="petal">
                <div class="petal">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tulip flower1 purpleflower">
          <div class="peak"></div>
        </div>
      </div>
      <div class="flower petal5 roundpetal flower1">
        <div class="petal">
          <div class="petal">
            <div class="petal">
              <div class="petal">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="branch left branch3">
      <div class="branch right branch-inner1">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>                
        <div class="leaf leaf3"></div>
        <div class="heart flower1">
        </div>
      </div>
      <div class="branch left branch-inner2">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>                
        <div class="leaf leaf3"></div>
        <div class="tulip flower1">
          <div class="peak"></div>
        </div>
      </div>
      <div class="leaf leaf1"></div>
      <div class="leaf leaf2"></div>
      <div class="flower roundpetal petal5 flower1 purpleflower">
        <div class="petal">
          <div class="petal">
            <div class="petal">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="branch right branch4">
      <div class="branch left branch-inner1">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>        
        <div class="leaf leaf3"></div>
        <div class="flower petal5 flower1 yellowflower">
          <div class="petal">
            <div class="petal">
              <div class="petal">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="branch right branch-inner2">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>                
        <div class="leaf leaf3"></div>
        <div class="tulip tulip1 flower1 purpleflower">
          <div class="peak"></div>
        </div>
      </div>
      <div class="flower petal5 roundpetal flower1">
        <div class="petal">
          <div class="petal">
            <div class="petal">
              <div class="petal">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="branch left branch5">
      <div class="branch right branch-inner1">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>                
        <div class="leaf leaf3"></div>
        <div class="heart flower1">
        </div>
      </div>
      <div class="branch left branch-inner2">
        <div class="leaf leaf1"></div>
        <div class="leaf leaf2"></div>                
        <div class="leaf leaf3"></div>
        <div class="tulip flower1 greenflower">
          <div class="peak"></div>
        </div>
      </div>
      <div class="flower roundpetal petal5 flower1 blueflower">
        <div class="petal">
          <div class="petal">
            <div class="petal">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Treeanimation;