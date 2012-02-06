if(!it) var it={};
if(!it.micz) it.micz={};
if(!it.micz.iAddress) it.micz.iAddress={};

it.micz.iAddress = {
	onLoad: function() {
		// initialization code
		window.addEventListener("keypress",it.micz.iAddress.keyHandler, false);
		this.initialized = true;
	},


	keyHandler : function(event) {
		if (event.altKey && event.ctrlKey && ((event.charCode == 105 /*"i"*/)||(event.charCode == 73 /*"I"*/))) {
			//alert('pressed on id:'+event.target.id+' tagName: '+event.target.tagName);
			if(it.micz.iAddress.checkValidAction(event.target.id)){
				//alert('target element: '+it.micz.iAddress.getTargetElement(event.target.id).id);
				it.micz.iAddress.insertEmptyRow(it.micz.iAddress.getTargetElement(event.target.id));
			}
		}
		return;
	},

	checkValidAction: function(element_id){	//check if we are calling the action on the right element
		return String(element_id).indexOf('addressCol')==0;
	},

	getTargetElement: function(element_id){		//get the element to update given the element from which we're calling che action
		var target_id='addressCol1#';
		var row_num=element_id.substring(element_id.indexOf('#')+1,element_id.length);
		return (document.getElementById(target_id+row_num)).parentNode.parentNode;
	},

	insertEmptyRow: function(element){	//insert an empty row above the selected one
		var listbox=document.getElementById("addressingWidget");
		awCreateDummyItem(listbox);
		
		//addresslist.insertItemAt(addresslist.getIndexOfItem(element),"",element.cloneNode(true));		
	},
};

window.addEventListener("load", it.micz.iAddress.onLoad, false);
