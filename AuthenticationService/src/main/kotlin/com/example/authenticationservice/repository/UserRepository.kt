package com.example.authenticationservice.repository

import com.example.authenticationservice.entity.UserEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jdbc.repository.query.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.util.Optional
import java.util.UUID

@Repository
interface UserRepository : JpaRepository<UserEntity, UUID> {
    fun findByEmail(email: String): Optional<UserEntity>

    @Query("select * from users where login = :login")
    fun findByLogin(@Param("login") login: String): UserEntity
}