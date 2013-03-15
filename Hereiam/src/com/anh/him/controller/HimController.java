/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anh.him.controller;

import com.anh.him.callback.HimCallback;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.application.Platform;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.stage.Stage;

/**
 *
 * @author Manoj
 */
public class HimController<T> implements Initializable {

    private T data;
    private HimCallback callback;
    private FXMLLoader loader;
    public FXMLLoader getLoader() {
        return loader;
    }

    public void setLoader(FXMLLoader loader) {
        this.loader = loader;
    }
   

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public HimCallback getCallback() {
        return callback;
    }

    public void setCallback(HimCallback callback) {
        this.callback = callback;
    }

    public HimController() {
    }

    public HimController(T a) {
        this.data = a;

    }

    public void release() {
        loader = null;
    }

    public boolean show(final Stage stage) {
        if (loader == null) {
            return false;
        }
        //   stage.getScene().;

        Platform.runLater(new Runnable() {
            @Override
            public void run() {
                
                stage.getScene().setRoot((Parent) loader.getRoot());
                stage.show();
               
            }
        });
        return true;
    }

    public void updateData(T data) {
        this.data = data;
        if (callback != null) {
            callback.update(null, data);
        }
    }

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // throw new UnsupportedOperationException("Not supported yet.");
    }
}
