package entity;

import constant.PublishingPeriod;
import util.Utils;

public class Magazine extends Book {

    private String code;
    private String title;
    private PublishingPeriod period;
    private Integer publicationYear;

    public Magazine(String code, String title, PublishingPeriod period, Integer publicationYear) {
        this.code = code;
        this.title = title;
        this.period = period;
        this.publicationYear = publicationYear;
    }

    public Magazine(String title, PublishingPeriod period, Integer publicationYear) {
        this.title = title;
        this.period = period;
        this.publicationYear = publicationYear;
        this.code = Utils.generateBookCode(this);
    }

    public Magazine() {
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

    public PublishingPeriod getPeriod() {
        return period;
    }

    public void setPeriod(PublishingPeriod period) {
        this.period = period;
    }

    public Integer getPublicationYear() {
        return publicationYear;
    }

    public void setPublicationYear(Integer publicationYear) {
        this.publicationYear = publicationYear;
    }

    @Override
    public String toString() {
        return "Magazine{" +
                "code='" + code + '\'' +
                ", title='" + title + '\'' +
                ", period=" + period +
                ", publicationYear=" + publicationYear +
                '}';
    }
}
