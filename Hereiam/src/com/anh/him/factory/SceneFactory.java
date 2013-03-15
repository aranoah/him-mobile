/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anh.him.factory;

import com.anh.him.controller.HimController;
import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

/**
 *
 * @author Manoj
 */
public class SceneFactory {
    //private static Object controltemp;

    private ConcurrentHashMap<String, FXMLLoader> factory;
    private static Stage stagew;
    
    public static Stage getStagew() {
        return stagew;
    }
    
    public static void setStagew(Stage stagew) {
        SceneFactory.stagew = stagew;
    }

    private SceneFactory() {
        factory = new ConcurrentHashMap<>();
    }
    ; 
    private static SceneFactory instance = new SceneFactory();

    public static SceneFactory getInstance() {
        return instance;
    }

    public static void setFxmlLoader(String sceneName, FXMLLoader fxmlloader) {
        instance.factory.put(sceneName, fxmlloader);
    }

    public static FXMLLoader getFxmlLoader(String scene, String Fxml) {
        
        System.out.println(instance.factory);
        FXMLLoader sloader = instance.factory.get(scene);
        if (sloader == null) {
            
            sloader = (new FXMLLoader(instance.getClass().getResource(Fxml)));
            setFxmlLoader(scene, sloader);
            System.out.println(instance.factory);
            return sloader;
            //factory.put(scene, sloader)
        } else {
            return sloader;
        }
    }
    
    public static HimController getController(String scene, String Fxml) throws IOException {
        
        
        FXMLLoader sloader = instance.factory.get(scene);
        System.out.println(instance.factory);
        if (sloader == null) {
            System.out.println("loader not found");
            sloader = (new FXMLLoader(instance.getClass().getResource(Fxml)));
            setFxmlLoader(scene, sloader);

            //factory.put(scene, sloader);
        boolean flag= false;
        if (flag ||stagew.getScene() == null) {
            System.out.println("no scene in stage");
            Parent root = (Parent) getRoot(sloader);
            Scene newScene = new Scene(root);
            if(stagew.getScene() == null)
            stagew.setScene(newScene);
        } else {
            System.out.println("scene found");
            System.out.println(instance.factory);
            sloader.load();
            //  Parent root =(Parent) getRoot(sloader );
            
        }    
        }
        System.out.println(sloader.getController());
        
        HimController controller = (HimController)sloader.getController();
        //System.out.println(controller);
        controller.setLoader(sloader);        
        return controller;
    }
    
    public static Parent getRoot(FXMLLoader fxmlloader) {
        Parent root = fxmlloader.getRoot();
        if (root == null) {
            try {
                root = (Parent) fxmlloader.load();
            } catch (IOException ex) {
                Logger.getLogger(SceneFactory.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return root;
    }
}
