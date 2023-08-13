package entity;

import util.Utils;

public class Novel extends Book {

    private String code;
    private String title;
    private String publisher;
    private Integer publicationYear;

    public Novel(String code, String title, String publisher, Integer publicationYear) {
        this.code = code;
        this.title = title;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
    }

    public Novel(String title, String publisher, Integer publicationYear) {
        this.title = title;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.code = Utils.generateBookCode(this);
    }

    public Novel() {
    }

    @Override
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Integer getPublicationYear() {
        return publicationYear;
    }

    public void setPublicationYear(Integer publicationYear) {
        this.publicationYear = publicationYear;
    }

    @Override
    public String toString() {
        return "Novel{" +
                "code='" + code + '\'' +
                ", title='" + title + '\'' +
                ", publisher='" + publisher + '\'' +
                ", publicationYear=" + publicationYear +
                '}';
    }


}
