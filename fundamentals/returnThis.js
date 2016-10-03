var Node = function(val){
	this.val = val;
	this.next = null;
}
Node.prototype.passThis = function(custom_return){
	console.log(this, "this");
	console.log(this.self, "self");
	console.log(custom_return, "My Return");
	return custom_return;
}
var SingleList = function(){
	this.head = null;
}
SingleList.prototype.add = function(val){
	if(!this.head){
		this.head = new Node(val);
		return this;
	}
	var current = this.head;
	while(current.next){
		current = current.next;
	}
	current.next = new Node(val);
	return this;
}
SingleList.prototype.dequeue = function(callback){
	var eliminatedNode = this.head;
	this.head = this.head.next;
	
}