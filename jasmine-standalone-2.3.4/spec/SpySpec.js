describe("Spy example", function(){
    var spies = null;
    var name = null;
    var phone = null;
    var retreivedName = null;

    beforeEach(function(){
       spies= {
         setName: function(value){
           console.log("in set name ()");
           name = value;
         },
         getName: function(){
             return name;
         },
         setPhone: function(value){
             phone = value;
         }
    };

    spyOn(spies, 'setName');
    spyOn(spies, 'setPhone');
    spyOn.setName(spies, 'Jhon');
    spyOn.setPhone(spies, '111-111');
    retreivedName = sp.getName();
    console.log("Retreived name:", retreivedName);
    });

    it("Check to see if the spies have been called", function(){
       expect(spies.setName)-toHaveBennCalled();
       expect(spies.setPhone)-toHaveBennCalled();
    });

    it("Check to see if the spies have been called with the proper arguments", function(){
        expect(spies.setName)-toHaveBennCalledWith("jhon");
        expect(spies.setPhone)-toHaveBennCalledWith("111-111");
     });
});