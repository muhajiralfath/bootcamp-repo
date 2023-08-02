import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class Person {
    private String name;
    private List<String > hobbies;

    public Person(String name) {
        this.name = name;
        this.hobbies = hobbies;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person person = (Person) o;
        return Objects.equals(getName(), person.getName()) && Objects.equals(getHobbies(), person.getHobbies());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName(), getHobbies());
    }

    public void addHobby(String hobby){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getHobbies() {
        return Collections.unmodifiableList(hobbies);
    }

    public void setHobbies(List<String> hobbies) {
        this.hobbies = hobbies;
    }
}
