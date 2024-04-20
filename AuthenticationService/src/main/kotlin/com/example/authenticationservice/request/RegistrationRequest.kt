package com.example.authenticationservice.request

import com.example.authenticationservice.dto.MemberData

data class RegistrationRequest(
    var name: String,
    var bannerUrl: String,
    var members: List<MemberData>,
    var email: String,
    var login: String,
    var password: String
)
