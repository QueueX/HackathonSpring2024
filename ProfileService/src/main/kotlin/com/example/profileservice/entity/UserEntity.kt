package com.example.profileservice.entity

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "Users")
class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null

    @Column(unique = true, nullable = false)
    var email: String? = null

    @Column(unique = true, nullable = false)
    var login: String? = null

    @Column(name = "password", nullable = false)
    var authPassword: String? = null

    @Column(nullable = false)
    var role: Role? = null

    @OneToOne
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    var teamId: TeamEntity? = null

}