var blockInfo = {
 '_-1':{id:-10,type:'fill',  rgba : [0.0,0.0,0.0,1.0]},
 '_0': {id:0, type:'air',   rgba : [1.0,1.0,1.0,1.0] },
 '_1': {id:1, type:'stone', rgba : [0.4,0.4,0.4,1.0] },  
 '_2': {id:2, type:'grass', rgba : [0.0,0.6,0.0,1.0] },
 '_3': {id:3, type:'dirt',  rgba : [0.2, 0.0,0.0,1.0] },
 '_4': {id:4, type:'cobble',rgba : [84,94,88,1.0]},
 '_5': {id:5, type:'wood',rgba :   [0.38,0.20,0.20,1.0]},
 '_8': {id:8, type:'water', rgba : [0.0,0.0,1.0,1.0] }, 
 '_9': {id:9, type:'water2', rgba : [0.0,0.0,1.0,1.0]},
 '_12':{id:12,type:'sand',  rgba : [250,250,200,1.0]},
 '_11':{id:11,type:'lava2', rgba:[250,135,17,1.0]},
 '_10':{id:10,type:'lava', rgba : [250,135,20,1.0]},
 '_13':{id:13,type:'gravel', rgba : [186,179,186,1.0]},
 '_14':{id:14,type:'gold', rgba:[247,176,45,1.0]},
 '_15':{id:15,type:'iron', rgba: [226, 192, 170, 1.0]},
 '_17':{id:17,type:'log',   rgba : [0.18,0.0,0.0,1.0]},
 '_18':{id:18,type:'leaves',rgba : [0.0,0.30,0.0,1.0]},
 '_20':{id:20,type:'glass',rgba : [0.9,0.9,0.9,0.3]},
 '_37':{id:37,type:'dandelion',rgba: [0.0,0.7,0.7,0.95]},
 '_38':{id:38,type:'rose',rgba:[0.95,0.2,0.2,0.95]},
 '_40':{id:40,type:'redmushroom',rgba:[0.8,0.1,0.1,0.98]},
 '_45':{id:45,type:'brick',rgba:[0.5,0.0,0.0,1.0]},
 '_48':{id:48,type:'mossy',rgba : [165,187,181,1.0]},
 '_50':{id:50, type:'torch',rgba : [0.92,0.57,0.13,1.0]},
 '_51':{id:51, type:'fire', rgba : [0.95,0.6,0.2,0.9]},
 '_52':{id:52, type:'spawner',rgba: [209,240,139,1.0]},
 '_53':{id:53, type:'woodstairs',rgba: [0.38,0.20,0.20,1.0]},
 '_56':{id:56, type:'diamond',rgba :[43,199,172,1.0]},
 '_67':{id:67, type:'cobblestairs', rgba :[84,94,88,240]},
 '_73':{id:73, type:'redstone',rgba:[1.0,0.1,0.1,1.0]},
 '_78':{id:78, type:'snow',rgba:[0.98,0.98,0.98,1.0]},
 '_79':{id:79, type:'ice',rgba:[41,169,255,1.0]},
 '_80':{id:80, type:'snowb',rgba:[0.99,0.99,0.99,1.0]},
 '_83':{id:83, type:'cane',rgba:[0.0,0.75,0.0,0.9]},
 '_85':{id:85, type:'fence',rgba:[0.38,0.20,0.20,1.0]},
 '_87':{id:87, type:'netherrack',rgba:[0.4,0.0,0.0,0.0,1.0]}
};

function convertColors() {
  for (var b in blockInfo) {
    var block = blockInfo[b];
    if (block.rgba[0] > 1 ||
    block.rgba[1] > 1 ||
    block.rgba[2] > 1) {
    
      for (var n = 0; n < 3; n++) {
        block.rgba[n] = block.rgba[n] / 255.0;
      }
      blockInfo[b] = block;
    }
  }
  
}
