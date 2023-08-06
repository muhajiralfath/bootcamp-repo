package com.enigma.tokonyadia.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "m_address")
public class Address {

    @Id
    @GenericGenerator(strategy = "uuid2", name = "system-uuid")
    @GeneratedValue(generator = "system-uuid")

    @Column(name = "id")
    private String id;
    @Column(name = "street")
    private String street;
    @Column(name = "city")
    private String city;
    @Column(name = "province")
    private String province;
}
