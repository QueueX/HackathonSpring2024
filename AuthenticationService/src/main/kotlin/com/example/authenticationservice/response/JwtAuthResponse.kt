package com.example.authenticationservice.response

data class JwtAuthResponse(
    var token: String = "",
    var user: UserResponse? = null
)
