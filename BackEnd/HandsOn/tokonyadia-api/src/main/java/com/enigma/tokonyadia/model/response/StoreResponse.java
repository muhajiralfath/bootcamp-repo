package com.enigma.tokonyadia.model.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class StoreResponse {

    private String id;
    private String name;
    private String address;

    private String mobilePhone;

}
