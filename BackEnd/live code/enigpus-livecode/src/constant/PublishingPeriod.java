package constant;

import exception.NotFoundException;

public enum PublishingPeriod {
    WEEKLY("Mingguan"), MONTHLY("Bulanan");

    private final String name;

    PublishingPeriod(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

}
