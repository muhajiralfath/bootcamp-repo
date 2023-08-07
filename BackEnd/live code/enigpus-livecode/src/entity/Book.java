package entity;

import java.io.Serializable;

public abstract class Book implements Serializable {

    public static final long serialVersionUID = 1L;

    public abstract String getTitle();
    public abstract String getCode();
}
