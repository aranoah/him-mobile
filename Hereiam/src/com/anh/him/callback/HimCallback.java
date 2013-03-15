/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.anh.him.callback;

import javafx.scene.Parent;

/**
 *
 * @author Manoj
 */
public interface HimCallback<T> {
    public void update(Parent root,T data);
}
