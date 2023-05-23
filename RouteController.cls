public with sharing class RouteController {
    
    public static string startpoint {
        get{
            startpoint = apexpages.currentpage().getparameters().get('startpoint');
            return startpoint;
        } 
        set;
    }
    public static string endpoint {
        get {
            endpoint = apexpages.currentpage().getparameters().get('endpoint');
            system.debug('--'+endpoint);
            return endpoint;
        } 
        set;
    }
    
}
