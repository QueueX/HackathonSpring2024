package com.example.profileservice.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
@Table(name = "Teams")
class TeamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null

    @Column(name = "team_name", unique = true, nullable = false)
    var teamName: String? = null

    @Column(name = "banner_url", unique = true, nullable = false)
    var bannerUrl: String? = null

    @OneToMany(mappedBy = "teamId")
    var members: List<MembersEntity>? = null

    @OneToOne(mappedBy = "teamId")
    @JsonIgnore
    var user: UserEntity? = null

}