jsonEx = {
    resultJsonObject: objectified = {},
    jsonParse: function (json) {
        objectified = {};
        for (i in json) {
            if (json[i] != null && json[i] != "") {
                var valueOfObject = "";
                if (typeof json[i] == "object" && json[i] != "") {
                    objectified["steps"] = json[i];
                }
                else {
                    if (json[i] != null)
                        valueOfObject = json[i];
                    if (valueOfObject.toString().startWith("function")) {
                        objectified = new Founcation("return (" + json[i] + ")")();
                    }
                    else {
                        objectified[i] = valueOfObject;
                    }
                }
            }
        }
        return objectified;
    },
    isObject : function(obj){
        return typeof obj == "object" && obj != "";
    },
    isNullOrEmpty : function(obj){
        return obj == null || obj == "";
    },
    toStringHA : function(obj){
        var result = "";
        if(obj != null)
        {
            result = obj.toString();            
        }
        return result;
    },
    stringToFunc : function(obj){
        return new Founcation("return (" + obj + ")")();
    },
    isFunction : function(obj){
        return obj.startWith("function");
    },
    hasValue : function(obj){
        return obj != null && obj != "";
    }
}